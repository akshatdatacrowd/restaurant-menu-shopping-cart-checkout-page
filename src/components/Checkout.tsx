import { SyntheticEvent, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import menuItems from "./assets/menu";
import axios from "axios";

const Checkout = () => {
  const initialCart = localStorage.getItem("cart1");
  const [Cart, setCart] = useState(initialCart ? JSON.parse(initialCart) : {});
  const [OrderItems, setOrderItems] = useState<any>([]);
  const [FormData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    phoneNumber: "",
  });

  const handleFormChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...FormData, [target.id]: target.value });
  };

  const onSubmitOrder = async (e: SyntheticEvent) => {
    // send post request to localhost:4000/order
    e.preventDefault();
    console.log(Object.keys(Cart));
    Object.keys(Cart).forEach((item: any) => {
      setOrderItems((prev: any) => [
        ...prev,
        {
          item: menuItems[parseInt(item) - 1].name,
          qty: Cart[item],
        },
      ]);
    });

    const body = {
      fullName: FormData.fullName,
      email: FormData.email,
      address: FormData.address,
      city: FormData.city,
      phoneNumber: FormData.phoneNumber,
      orderItems: OrderItems,
    };
    const data = await axios.post("http://localhost:4000/order", body);

    console.log(data);
    setOrderItems([]);
    // localStorage.removeItem("cart1");
    // setCart({});
  };

  if (Object.keys(Cart).length === 0) {
    return <Navigate to="/order" />;
  }

  //   dashboard
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
            <form className="w-100 p-4 py-5" onSubmit={onSubmitOrder}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleFormChange}
                  id="fullName"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleFormChange}
                  id="phoneNumber"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleFormChange}
                  id="address"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleFormChange}
                  id="city"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={handleFormChange}
                  id="email"
                />
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
