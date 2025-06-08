import { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import pizza1 from "./assets/pizza1.jpg"; // Đảm bảo bạn có ảnh
import pizza2 from "./assets/pizza2.jpg"; // Đảm bảo bạn có ảnh
import pizza3 from "./assets/pizza3.jpg"; // Đảm bảo bạn có ảnh
import pizza4 from "./assets/pizza4.jpg"; // Đảm bảo bạn có ảnh
import pizza5 from "./assets/pizza5.jpg"; // Đảm bảo bạn có ảnh

// Tạo một component tùy chỉnh để hiển thị ảnh trong carousel
function ExampleCarouselImage({ src, alt, text }) {
  return <img src={src} alt={alt} className="d-block w-100 banner-img" />;
}

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid className="p-0 banner">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {/* Slide 1 */}
        <Carousel.Item>
          <ExampleCarouselImage
            src={pizza1}
            alt="Slide 1"
            text="Neapolitan Pizza"
          />
          <Carousel.Caption>
            <h3>Neapolitan Pizza</h3>
            <p>
              If you are looking for traditional Italian pizza, this is the best
              option!
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <ExampleCarouselImage
            src={pizza2}
            alt="Slide 2"
            text="Margarita Pizza"
          />
          <Carousel.Caption>
            <h3>Margarita Pizza</h3>
            <p>Simple, yet delicious with fresh basil and mozzarella.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <ExampleCarouselImage
            src={pizza3}
            alt="Slide 3"
            text="Pepperoni Pizza"
          />
          <Carousel.Caption>
            <h3>Pepperoni Pizza</h3>
            <p>The classic choice for meat lovers!</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 4 */}
        <Carousel.Item>
          <ExampleCarouselImage
            src={pizza4}
            alt="Slide 4"
            text="Vegetarian Pizza"
          />
          <Carousel.Caption>
            <h3>Vegetarian Pizza</h3>
            <p>Loaded with fresh vegetables and a delicious tomato base.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 5 */}
        <Carousel.Item>
          <ExampleCarouselImage
            src={pizza5}
            alt="Slide 5"
            text="BBQ Chicken Pizza"
          />
          <Carousel.Caption>
            <h3>BBQ Chicken Pizza</h3>
            <p>A smoky, sweet flavor with tender chicken pieces.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ControlledCarousel;
