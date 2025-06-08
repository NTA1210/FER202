function Booking() {
  return (
    <div className="container mt-4 text-white px-5">
      <h2 className="mb-1 text-center">Book Your Table</h2>
      <form>
        <div className="row mb-5">
          <div className="col-md-4">
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Your Name*"
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Your Email*"
              required
            />
          </div>
          <div className="col-md-4">
            <select id="service" className="form-select">
              <option value="">Select a service</option>
              <option value="dine-in">Dine In</option>
              <option value="takeaway">Takeaway</option>
              <option value="delivery">Delivery</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <textarea
            id="comment"
            className="form-control"
            rows="4"
            placeholder="Please write your comment here"
          />
        </div>
        <button type="submit" className="btn btn-warning text-white">
          Send message
        </button>
      </form>
    </div>
  );
}

export default Booking;
