import PropTypes from "prop-types";

function ExampleCarouselImage({ src, alt }) {
  return (
    <img
      className="d-block w-100"
      src={src}
      alt={alt}
      style={{ maxHeight: "500px", objectFit: "cover" }}
    />
  );
}

ExampleCarouselImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
