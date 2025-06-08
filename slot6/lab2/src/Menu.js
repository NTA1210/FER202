// Import menu images from assets
import menu1 from "./assets/menu1.jpg";
import menu2 from "./assets/menu2.jpg";
import menu3 from "./assets/menu3.jpg";
import menu4 from "./assets/menu4.jpg";

// Menu component displays a menu section with cards
function Menu() {
  return (
    // Main container for the menu
    <div className="Menu container px-5">
      {/* Menu title section, aligned to the start and styled */}
      <div className="menu-title d-flex flex-column align-items-start text-white">
        <h1 className="text-center">Our Menu</h1>
      </div>
      {/* Menu items section, centered horizontally */}
      <div className="menu-items d-flex justify-content-center gap-2">
        {/* Card for a menu item */}
        <div className="card">
          {/* Badge SELL ở góc trên bên trái */}
          <span className="badge position-absolute text-bg-warning fs-5">
            SALE
          </span>
          {/* Menu item image */}
          <img
            src={menu1}
            className="card-img-top"
            alt="Delicious pepperoni pizza"
          />
          {/* Card body with title, description, and button */}
          <div className="card-body">
            <h5 className="card-title">Margherita Pizza</h5>
            <span className="card-text d-flex align-items-center">
              <p className="text-decoration-line-through">$40.00</p>
              <p className="text-warning">$24.00</p>
            </span>
            <a href="/" className="btn bg-gray text-white w-100">
              Buy
            </a>
          </div>
        </div>
        {/*  */}
        <div className="card">
          {/* Menu item image */}
          <img
            src={menu2}
            className="card-img-top"
            alt="Delicious pepperoni pizza"
          />
          {/* Card body with title, description, and button */}
          <div className="card-body">
            <h5 className="card-title">Mushroom Pizza</h5>
            <span className="card-text d-flex align-items-center">
              <p className="text-dark">$24.00</p>
            </span>
            <a href="/" className="btn bg-gray text-white w-100">
              Buy
            </a>
          </div>
        </div>
        {/*  */}
        <div className="card">
          {/* Badge SELL ở góc trên bên trái */}
          <span className="badge position-absolute text-bg-warning fs-5">
            NEW
          </span>
          {/* Menu item image */}
          <img
            src={menu3}
            className="card-img-top"
            alt="Delicious pepperoni pizza"
          />
          {/* Card body with title, description, and button */}
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <span className="card-text d-flex align-items-center">
              <p className="text-dark">$25.00</p>
            </span>
            <a href="/" className="btn bg-gray text-white w-100">
              Buy
            </a>
          </div>
        </div>
        {/*  */}
        <div className="card">
          {/* Badge SELL ở góc trên bên trái */}
          <span className="badge position-absolute text-bg-warning fs-5">
            SALE
          </span>
          {/* Menu item image */}
          <img
            src={menu4}
            className="card-img-top"
            alt="Delicious pepperoni pizza"
          />
          {/* Card body with title, description, and button */}
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <span className="card-text d-flex align-items-center">
              <p className="text-decoration-line-through">$40.00</p>
              <p className="text-warning">$30.00</p>
            </span>
            <a href="/" className="btn bg-gray text-white w-100">
              Buy
            </a>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

// Export the Menu component as default
export default Menu;
