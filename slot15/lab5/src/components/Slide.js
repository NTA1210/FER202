import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";

function Slide() {
  return (
    <Carousel slide={false} className="banner w-100">
      <Carousel.Item>
        <ExampleCarouselImage src="/images/banner.png" alt="Slide 1" />
        <Carousel.Caption>
          <h3>Celebration Ham</h3>
          <p>Masyadong Good!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage src="/images/banner2.jpg" alt="Slide 2" />
        <Carousel.Caption>
          <h3>Delicious Feast</h3>
          <p>Enjoy your holiday meals with family and friends.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage src="/images/banner3.jpg" alt="Slide 3" />
        <Carousel.Caption>
          <h3>Healthy Choices</h3>
          <p>Fresh salad and balanced meals for a better life.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;
