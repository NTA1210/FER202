import Slide from "../components/Slide";

function Home() {
  return (
    <div>
      <Slide />
      <div className="d-flex justify-content-around">
        {[...Array(6)].map((_, i) => (
          <img
            src={`/images/food${i + 1}.png`}
            key={i}
            alt=""
            style={{ width: "100px", borderRadius: "50%" }}
          />
        ))}
      </div>
      <h2 className="text-danger p-3">This is Home Page</h2>
    </div>
  );
}
export default Home;
