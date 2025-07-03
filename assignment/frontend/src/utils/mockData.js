import React from "react";
export const categories = [
  {
    id: 1,
    name: "Technology",
    slug: "technology",
  },
  {
    id: 2,
    name: "Business",
    slug: "business",
  },
  {
    id: 3,
    name: "Health",
    slug: "health",
  },
  {
    id: 4,
    name: "Science",
    slug: "science",
  },
  {
    id: 5,
    name: "Sports",
    slug: "sports",
  },
  {
    id: 6,
    name: "Entertainment",
    slug: "entertainment",
  },
  {
    id: 7,
    name: "Politics",
    slug: "politics",
  },
  {
    id: 8,
    name: "World",
    slug: "world",
  },
];
export const articles = [
  {
    id: 1,
    title: "AI Revolution: How Machine Learning is Transforming Industries",
    summary:
      "A deep dive into the latest AI advancements and their impact across various sectors.",
    content: `
      <p>Artificial intelligence continues to evolve at a rapid pace, with new breakthroughs happening almost daily. From healthcare to finance, AI is revolutionizing how industries operate and solve complex problems.</p>
      <p>Recent advancements in machine learning algorithms have enabled systems to process vast amounts of data with unprecedented accuracy. Companies are leveraging these technologies to automate processes, gain insights, and create new products and services.</p>
      <p>Experts predict that by 2030, AI will contribute up to $15.7 trillion to the global economy. "We're just scratching the surface of what's possible," says Dr. Emily Chen, AI researcher at MIT. "The next decade will bring transformations we can barely imagine today."</p>
      <p>However, concerns about ethics, job displacement, and regulation remain. Policymakers worldwide are working to establish frameworks that promote innovation while protecting against potential risks.</p>
      <p>As AI becomes more integrated into daily life, the focus is shifting toward creating systems that are not only powerful but also transparent, fair, and aligned with human values.</p>
    `,
    categoryId: 1,
    authorName: "Sarah Johnson",
    authorAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    publishDate: "2023-06-15T09:30:00Z",
    image:
      "https://images.unsplash.com/photo-1677442135136-760c813a743c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Global Markets Respond to Economic Policy Shifts",
    summary:
      "Markets worldwide show volatility as central banks adjust interest rates and fiscal policies.",
    content: `
      <p>Global financial markets experienced significant fluctuations today as central banks across major economies announced policy adjustments. The Federal Reserve's decision to maintain current interest rates, contrary to earlier predictions of an increase, sent ripples through equity and bond markets.</p>
      <p>Asian markets closed with mixed results, with Japan's Nikkei 225 gaining 1.2% while China's Shanghai Composite fell 0.8%. European markets showed similar divergence, with the FTSE 100 up 0.5% and Germany's DAX down 0.3%.</p>
      <p>"We're seeing a recalibration of expectations," explains financial analyst Robert Torres. "Investors are reassessing growth prospects in light of these policy decisions."</p>
      <p>Currency markets also responded strongly, with the dollar weakening against major currencies. The euro reached a six-month high against the dollar, while emerging market currencies showed varied performance.</p>
      <p>Economists remain divided on the long-term implications, with some warning of inflationary pressures while others see the policies as necessary to sustain economic recovery post-pandemic.</p>
    `,
    categoryId: 2,
    authorName: "Michael Chang",
    authorAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    publishDate: "2023-06-14T16:45:00Z",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Breakthrough in Cancer Research: New Treatment Shows Promise",
    summary:
      "Scientists develop innovative therapy targeting previously untreatable cancer types.",
    content: `
      <p>A groundbreaking new cancer treatment developed by researchers at Stanford University has shown remarkable results in early clinical trials. The therapy, which combines immunotherapy with targeted genetic modification, has demonstrated effectiveness against several aggressive forms of cancer that have traditionally been difficult to treat.</p>
      <p>In the Phase II trial involving 120 patients with advanced-stage cancers, 67% showed significant tumor reduction, with 18% experiencing complete remission. These results far exceed the effectiveness of current standard treatments for similar cancer stages.</p>
      <p>"What makes this approach unique is its ability to adapt to the specific genetic profile of each patient's cancer," explains Dr. Lisa Rodriguez, lead researcher on the project. "It's essentially a personalized treatment that evolves with the disease."</p>
      <p>The therapy works by reprogramming the patient's immune cells to recognize and attack cancer cells based on their unique genetic markers. Unlike traditional treatments, it causes minimal damage to healthy tissues, resulting in fewer side effects.</p>
      <p>While larger trials are still needed, medical experts are cautiously optimistic. "If these results hold up in Phase III trials, this could represent one of the most significant advances in cancer treatment in decades," says Dr. James Wilson, oncologist at Mayo Clinic.</p>
    `,
    categoryId: 3,
    authorName: "Elena Martinez",
    authorAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    publishDate: "2023-06-13T11:20:00Z",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: 4,
    title: "Sustainable Architecture: The Future of Urban Design",
    summary:
      "Innovative building concepts aim to reduce environmental impact while enhancing livability.",
    content: `
      <p>Architects and urban planners are increasingly embracing sustainable design principles as cities worldwide face environmental challenges. From carbon-neutral skyscrapers to neighborhood-scale ecological systems, sustainable architecture is redefining urban landscapes.</p>
      <p>In Copenhagen, the newly completed "Green Tower" generates more energy than it consumes through a combination of solar panels, wind turbines, and advanced insulation. The building also features extensive vertical gardens that improve air quality and provide natural cooling.</p>
      <p>"We're moving beyond the idea that buildings are static objects," says architect Johanna Berg. "Modern sustainable architecture treats buildings as living systems that interact with their environment."</p>
      <p>Similar projects are emerging globally, with Singapore's "Forest City" development integrating buildings with natural ecosystems, and Mexico City's "Vertical Farm" combining residential spaces with food production.</p>
      <p>These approaches not only reduce carbon footprints but also address other urban challenges like food security, water management, and community wellbeing. As climate concerns intensify, experts predict sustainable architecture will become the standard rather than the exception in urban development.</p>
    `,
    categoryId: 4,
    authorName: "David Wilson",
    authorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    publishDate: "2023-06-12T14:10:00Z",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Olympic Athletes Break Records in Summer Games",
    summary:
      "Multiple world records shattered as competition heats up in international sporting event.",
    content: `
      <p>The Summer Olympics have been a showcase of extraordinary athletic achievement, with multiple world records falling in the first week of competition. Athletes from around the globe have pushed the boundaries of human performance across various disciplines.</p>
      <p>In swimming, American Sarah Chen broke the 200m freestyle world record with a time of 1:52.16, shaving nearly half a second off the previous mark set in 2019. "I still can't believe it," Chen said after her historic swim. "Everything just came together perfectly today."</p>
      <p>On the track, Kenyan runner Emmanuel Kipchoge surpassed his own world record in the 10,000 meters with a time of 26:32.74, demonstrating remarkable endurance and tactical racing.</p>
      <p>Perhaps most impressive was Brazilian gymnast Luisa Santos, who scored a perfect 10 in the floor exercise—the first in Olympic competition since the scoring system was revised in 2006.</p>
      <p>Sports scientists attribute the wave of record-breaking performances to advancements in training methods, nutrition, and technology. "We're seeing the benefits of highly personalized training regimens based on genetic data and AI analysis," explains sports physiologist Dr. Marcus Johnson.</p>
      <p>With a week of competition still remaining, fans and experts alike anticipate more records may fall before the closing ceremony.</p>
    `,
    categoryId: 5,
    authorName: "James Rodriguez",
    authorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    publishDate: "2023-06-11T19:30:00Z",
    image:
      "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "New Film Challenges Industry Norms, Wins Critical Acclaim",
    summary:
      "Independent production receives standing ovation at international film festival.",
    content: `
      <p>An innovative independent film has taken the cinema world by storm, earning widespread critical acclaim and challenging traditional filmmaking approaches. "Echoes of Tomorrow," directed by newcomer Aisha Patel, received a ten-minute standing ovation at its premiere at the Venice Film Festival.</p>
      <p>The film, shot entirely using experimental techniques and featuring a cast of non-professional actors, tells the story of a community adapting to life after an environmental disaster. Critics have praised its unconventional narrative structure and stunning visual language.</p>
      <p>"Patel has created something truly original—a film that defies categorization while delivering a powerful emotional impact," wrote film critic Carlos Mendez in his five-star review.</p>
      <p>The production was completed on a modest budget of $1.2 million, a fraction of typical studio films. Much of the footage was captured using custom-modified cameras designed by the director herself.</p>
      <p>"I wanted to create a visual experience that mirrors the disorientation and adaptation the characters are experiencing," Patel explained in a post-screening discussion. "Traditional filmmaking techniques simply wouldn't have achieved that."</p>
      <p>Major studios are already expressing interest in Patel's next project, signaling a potential shift in industry attitudes toward experimental approaches.</p>
    `,
    categoryId: 6,
    authorName: "Sophia Lee",
    authorAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    publishDate: "2023-06-10T08:45:00Z",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: 7,
    title: "Historic Climate Agreement Reached After Marathon Negotiations",
    summary:
      "Global leaders commit to ambitious emission reduction targets and financial support for developing nations.",
    content: `
      <p>After two weeks of intense negotiations, world leaders have reached a landmark climate agreement that surpasses previous commitments in both ambition and scope. The "Global Climate Compact" establishes legally binding targets for carbon emission reductions and creates a $100 billion annual fund to support climate adaptation in vulnerable nations.</p>
      <p>The agreement, signed by 194 countries, commits major economies to reaching carbon neutrality by 2045—five years earlier than previously pledged. It also includes unprecedented provisions for monitoring and enforcement, addressing a key weakness of past climate accords.</p>
      <p>"This is a turning point in our collective response to the climate crisis," said UN Secretary-General Maria Rodriguez. "For the first time, we have an agreement that matches the scale and urgency of the challenge."</p>
      <p>A distinctive feature of the compact is its focus on climate justice, with industrialized nations acknowledging their historical responsibility for emissions and committing to larger reductions and financial contributions.</p>
      <p>Environmental groups have cautiously welcomed the agreement while emphasizing the need for immediate action. "The targets are strong, but what matters now is implementation," said Greenpeace International Director Jamal Ibrahim. "We'll be watching closely to ensure countries follow through on these historic commitments."</p>
    `,
    categoryId: 7,
    authorName: "Thomas Brown",
    authorAvatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    publishDate: "2023-06-09T22:15:00Z",
    image:
      "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: 8,
    title: "Cultural Heritage Site Discovered in Remote Region",
    summary:
      "Archaeologists uncover ancient settlement that could rewrite understanding of early civilizations.",
    content: `
      <p>An international team of archaeologists has announced the discovery of an extensive ancient settlement in a previously unexplored region of the Andes mountains. The site, estimated to be over 5,000 years old, contains well-preserved structures, artifacts, and artwork that could transform our understanding of pre-Columbian civilizations.</p>
      <p>The settlement, named "Wari Qorikancha" by researchers, spans approximately 30 hectares and includes complex architectural features such as terraced fields, water management systems, and ceremonial spaces. Most remarkably, the site contains numerous stone tablets with an unknown form of writing.</p>
      <p>"This discovery challenges our timeline of writing systems in the Americas," explains lead archaeologist Dr. Ana Fuentes. "These tablets appear to predate other known writing in the region by at least 1,000 years."</p>
      <p>The team has also uncovered evidence of advanced metallurgy and astronomical knowledge, including tools and structures aligned with celestial events.</p>
      <p>Local indigenous communities have been involved in the excavation process, contributing traditional knowledge that has helped researchers interpret certain aspects of the site. "This collaborative approach has been invaluable," says Dr. Fuentes. "It combines scientific methods with cultural insights passed down through generations."</p>
      <p>The site is now being carefully documented using 3D scanning technology before artifacts are moved to a purpose-built research facility nearby.</p>
    `,
    categoryId: 8,
    authorName: "Isabella Garcia",
    authorAvatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    publishDate: "2023-06-08T13:50:00Z",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
];
export const getArticlesByCategory = (categoryId) => {
  return articles.filter((article) => article.categoryId === categoryId);
};
export const getFeaturedArticles = () => {
  return articles.filter((article) => article.featured);
};
export const getRecentArticles = (limit = 6) => {
  return [...articles]
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )
    .slice(0, limit);
};
export const getRelatedArticles = (articleId, limit = 3) => {
  const article = articles.find((a) => a.id === articleId);
  if (!article) return [];
  return articles
    .filter((a) => a.id !== articleId && a.categoryId === article.categoryId)
    .slice(0, limit);
};
export const searchArticles = (query) => {
  const searchTerm = query.toLowerCase();
  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm) ||
      article.summary.toLowerCase().includes(searchTerm) ||
      article.content.toLowerCase().includes(searchTerm)
  );
};
export const getArticleById = (id) => {
  return articles.find((article) => article.id === Number(id));
};
export const getCategoryById = (id) => {
  return categories.find((category) => category.id === id);
};

//
const categories1 = {
  business: "business",
  crime: "crime",
  domestic: "domestic",
  education: "education",
  entertainment: "entertainment",
  environment: "environment",
  food: "food",
  health: "health",
  lifestyle: "lifestyle",
  politics: "politics",
  science: "science",
  sports: "sports",
  technology: "technology",
  top: "top",
  tourism: "tourism",
  world: "world",
  other: "other",
};
