import logo from "./logo-fpt.png";

function Ex2() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* HEADER */}
      <div
        className="container-fluid text-center text-dark d-flex flex-column align-items-center justify-content-center mb-5 py-5"
        style={{
          fontSize: "20px",
          background: "#F98900",
        }}
      >
        <img
          src={logo}
          alt="FPT Logo"
          className="img-fluid"
          style={{ height: "200px", objectFit: "contain" }}
        />

        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* CONTENT */}
      <div className="content row text-center m-5 flex-grow-1">
        <h1>About</h1>
        <p>This is the about section of the website</p>
        <h1>Contact</h1>
        <p>For any inquiries, please contact us at example@example.com.</p>
      </div>

      {/* FOOTER */}
      <footer
        className="footer text-white text-center py-3 mt-auto d-flex align-items-center justify-content-center"
        style={{ background: "#F98900" }}
      >
        <p style={{ margin: 0 }}>© 2023 Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Ex2;
