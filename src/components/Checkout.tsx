import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import menuItems from "./assets/menu";

const Checkout = () => {
  const initialCart = localStorage.getItem("cart1");
  const [Cart, setCart] = useState(initialCart ? JSON.parse(initialCart) : {});

  if (Object.keys(Cart).length === 0) {
    return <Navigate to="/order" />;
  }

  return (
    <>
      <div className="w-100 px-5 pt-2 m-0">
        <Link to="/order">
          <button className="btn btn-dark fw-bold">Go back to menu</button>
        </Link>
      </div>
      <div className="w-100 p-3 p-lg-5 d-flex justify-content-around">
        <div className="p-2">
          <h2 className="fw-bold text-primary">
            Tell us where to bring the food
          </h2>
          <div className="w-75 d-flex justify-content-center">
            <form className="w-100 p-4 py-5" action="">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input type="text" className="form-control" id="phone" />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input type="text" className="form-control" id="address" />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="city" />
              </div>
              <div className="mb-3">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <input type="text" className="form-control" id="state" />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>{" "}
        </div>
        <div className="p-2">
          <h2 className="fw-bold text-primary">Your Order</h2>
          <div className="d-flex justify-content-between">
            <h4 className="fw-bold">Q</h4>
            <h4 className="fw-bold">Item</h4>
            <h4 className="fw-bold">Price</h4>
          </div>
          <hr />
          {Object.keys(Cart).map((item) => (
            <div className="d-flex justify-content-between">
              <h4 className="mx-3">{Cart[item]}</h4>
              <h4 className="mx-3">{menuItems[parseInt(item) - 1].name}</h4>
              <h4 className="mx-3 fs-3 fw-bold text-success">
                ${menuItems[parseInt(item) - 1].price * Cart[item]}
              </h4>
            </div>
          ))}
          <hr />
          <div className="d-flex justify-content-between">
            <h4 className="fw-bold">Subtotal</h4>
            <h4 className="fw-bold">
              $
              {Object.keys(Cart).reduce(
                (acc, item) =>
                  acc + Cart[item] * menuItems[parseInt(item) - 1].price,
                0
              )}
            </h4>
          </div>
          <div className="d-flex justify-content-between">
            <h4 className="fw-bold">Tax (10.25%)</h4>
            <h4 className="fw-bold">
              $
              {(
                0.1025 *
                Object.keys(Cart).reduce(
                  (acc, item) =>
                    acc + Cart[item] * menuItems[parseInt(item) - 1].price,
                  0
                )
              ).toFixed(2)}
            </h4>
          </div>
          <div className="d-flex justify-content-between">
            <h4 className="fw-bold fs-2">Total</h4>
            <h4 className="fw-bold text-muted fs-2">
              $
              {(
                0.1025 *
                  Object.keys(Cart).reduce(
                    (acc, item) =>
                      acc + Cart[item] * menuItems[parseInt(item) - 1].price,
                    0
                  ) +
                Object.keys(Cart).reduce(
                  (acc, item) =>
                    acc + Cart[item] * menuItems[parseInt(item) - 1].price,
                  0
                )
              ).toFixed(2)}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
