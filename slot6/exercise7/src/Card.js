function Card({ img, text, className }) {
  return (
    <div
      className={`card p-2 text-dark ${className || ""}`}
      style={{ width: "18rem" }}
    >
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;
