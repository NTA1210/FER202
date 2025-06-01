// Import pizza images from assets
import pizza1 from "./assets/pizza1.jpg";
import pizza2 from "./assets/pizza2.jpg";
import pizza3 from "./assets/pizza3.jpg";
import pizza4 from "./assets/pizza4.jpg";
import pizza5 from "./assets/pizza5.jpg";

// Banner component displays a Bootstrap carousel with pizza images and captions
function Banner() {
  return (
    // Main container for the banner, removes padding
    <div className="banner container-fluid p-0">
      {/* Bootstrap carousel setup */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Carousel indicators (dots) for navigation */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          />
        </div>
        {/* Carousel slides */}
        <div className="carousel-inner">
          {/* First slide, set as active */}
          <div className="carousel-item active">
            <img
              src={pizza1}
              className="d-block w-100 banner-img"
              alt="Slide 1"
            />
            {/* Caption for the slide */}
            <div class="carousel-caption d-none d-md-block">
              <h3>Neapolitan Pizza</h3>
              <p className="fs-5">
                If you are looking for traditional Italian pizza ,the Neapolitan
                is the best option!
              </p>
            </div>
          </div>
          {/* Second slide */}
          <div className="carousel-item">
            <img
              src={pizza2}
              className="d-block w-100 banner-img"
              alt="Slide 2"
            />
            <div class="carousel-caption d-none d-md-block">
              <h3>Neapolitan Pizza</h3>
              <p className="fs-5">
                If you are looking for traditional Italian pizza ,the Neapolitan
                is the best option!
              </p>
            </div>
          </div>
          {/* Third slide */}
          <div className="carousel-item">
            <img
              src={pizza3}
              className="d-block w-100 banner-img"
              alt="Slide 3"
            />
            <div class="carousel-caption d-none d-md-block">
              <h3>Neapolitan Pizza</h3>
              <p className="fs-5">
                If you are looking for traditional Italian pizza ,the Neapolitan
                is the best option!
              </p>
            </div>
          </div>
          {/* Fourth slide */}
          <div className="carousel-item">
            <img
              src={pizza4}
              className="d-block w-100 banner-img"
              alt="Slide 4"
            />
            <div class="carousel-caption d-none d-md-block">
              <h3>Neapolitan Pizza</h3>
              <p className="fs-5">
                If you are looking for traditional Italian pizza ,the Neapolitan
                is the best option!
              </p>
            </div>
          </div>
          {/* Fifth slide */}
          <div className="carousel-item">
            <img
              src={pizza5}
              className="d-block w-100 banner-img"
              alt="Slide 5"
            />
            <div class="carousel-caption d-none d-md-block">
              <h3>Neapolitan Pizza</h3>
              <p className="fs-5">
                If you are looking for traditional Italian pizza ,the Neapolitan
                is the best option!
              </p>
            </div>
          </div>
        </div>

        {/* Carousel navigation controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

// Export the Banner component as default
export default Banner;
