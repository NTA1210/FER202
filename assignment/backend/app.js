require("dotenv").config();
const express = require("express");
const app = express();
const fs = require("fs").promises;
const cors = require("cors");
const crypto = require("crypto");

// ✅ Bật CORS mặc định (cho phép mọi origin)
app.use(cors());
app.use(express.json());

// ✅ Nếu bạn muốn cho phép CORS theo cấu hình (nâng cao)
app.use(
  cors({
    origin: "http://localhost:3010", // chỉ cho phép FE này
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

const loadNews = async () => {
  try {
    const data = await fs.readFile("./news.json", "utf-8");
    const results = JSON.parse(data).news.filter(
      (item) => item.status === true
    );
    return results;
  } catch (err) {
    console.log(err);
  }
};
const loadUsers = async () => {
  try {
    const data = await fs.readFile("./users.json", "utf-8");
    const results = JSON.parse(data).users;
    return results;
  } catch (err) {
    console.log(err);
  }
};

const renderId = () => {
  return crypto.randomBytes(16).toString("hex");
};

function paginate(array, req) {
  const page = parseInt(req.query.page) >= 1 ? parseInt(req.query.page) : 1;
  const pageSize = parseInt(req.query.pageSize) || 9;

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    page,
    pageSize,
    total: array.length,
    totalPages: Math.ceil(array.length / pageSize),
    data: array.slice(start, end),
  };
}

function sortNews(array, req) {
  const { sort } = req.query;
  if (!sort) {
    return array;
  }
  return array.sort((a, b) => {
    if (sort === "newest") {
      return new Date(b.pubDate) - new Date(a.pubDate);
    } else if (sort === "oldest") {
      return new Date(a.pubDate) - new Date(b.pubDate);
    }
  });
}

app.get("/api/news", async (req, res) => {
  const news = await loadNews();
  res.send(paginate(news, req));
});

app.get("/api/news/search", async (req, res) => {
  const { q, category } = req.query;
  const news = await loadNews();

  const searchResults = news.filter((article) => {
    const matchesQuery = q
      ? article.title.toLowerCase().includes(q.toLowerCase())
      : true;
    const matchesCategory = category
      ? article.category.includes(category)
      : true;
    return matchesQuery && matchesCategory;
  });

  res.send(paginate(sortNews(searchResults, req), req));
});

app.get("/api/news/latest", async (req, res) => {
  const { page } = req.query;
  const news = await loadNews();
  const latestNews = news.sort((a, b) => {
    return new Date(b.pubDate) - new Date(a.pubDate);
  });
  res.send(paginate(latestNews, req));
});

app.get("/api/news/categories", async (req, res) => {
  const news = await loadNews();
  const categories = news.map((article) => article.category).flat();
  const uniqueCategories = Array.from(new Set(categories));
  res.send({
    data: uniqueCategories,
    total: uniqueCategories.length,
  });
});

app.get("/api/news/:id", async (req, res) => {
  const id = req.params.id;
  const news = await loadNews();
  const article = news.find((article) => article.article_id === id);
  if (!article) {
    res.status(404).send("Article not found");
    return;
  }
  res.send(article);
});

async function saveNews(news) {
  console.log("🔧 saveNews() called. Saving data to file...");
  await fs.writeFile("./news.json", JSON.stringify({ news }, null, 2));
  console.log("✅ File saved!");
}
async function saveUsers(users) {
  console.log("🔧 saveNews() called. Saving data to file...");
  await fs.writeFile("./users.json", JSON.stringify({ users }, null, 2));
  console.log("✅ File saved!");
}

app.put("/api/news/:id", async (req, res) => {
  const id = req.params.id;
  const news = await loadNews();
  const articleIndex = news.findIndex((article) => article.article_id === id);
  if (articleIndex === -1) {
    res.status(404).send("Article not found");
    return;
  }
  news[articleIndex] = { ...news[articleIndex], ...req.body };
  await saveNews(news);

  res.send({
    id,
    ...news[articleIndex],
  });
});

app.delete("/api/news/:id", async (req, res) => {
  const id = req.params.id;
  const news = await loadNews();
  const articleIndex = news.findIndex((article) => article.article_id === id);
  if (articleIndex === -1) {
    res.status(404).send("Article not found");
    return;
  }
  news[articleIndex] = { ...news[articleIndex], status: false };
  await saveNews(news);
  res.send({ id });
});

app.post("/api/news", async (req, res) => {
  const news = await loadNews();
  const newArticle = {
    ...req.body,
    article_id: renderId(),
    status: true,
  };
  news.push(newArticle);
  await saveNews(news);
  console.log("✅ Article added!", newArticle.article_id);

  res.send(newArticle);
});

app.post("/api/news/login", async (req, res) => {
  const users = await loadUsers();
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);
  if (!user) {
    res.status(400).send("User name or password is incorrect");
    return;
  }
  if (user.password !== password) {
    res.status(400).send("User name or password is incorrect");
    return;
  }
  res.send(user);
});

app.post("/api/news/register", async (req, res) => {
  const users = await loadUsers();
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);
  if (user) {
    res.status(400).send("User already exists");
    return;
  }
  users.push({
    username,
    password,
  });
  await saveUsers(users);
  res.send({ username, password });
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
