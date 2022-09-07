import { SyntheticEvent, useEffect, useState } from "react";
import menuItems from "./assets/menu";
import { GrFormAdd } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";
import ShoppingCart from "./ShoppingCart";

const Order = () => {
  const initialCart = localStorage.getItem("cart1");
  const [Cart, setCart] = useState<any>(
    initialCart ? JSON.parse(initialCart) : {}
  );
  const [ShowCart, setShowCart] = useState(false);

  const onAddToCart = (e: SyntheticEvent) => {
    const id = e.currentTarget.id;
    setCart({ ...Cart, [e.currentTarget.id]: Cart[id] ? Cart[id] + 1 : 1 });
    localStorage.setItem(
      "cart1",
      JSON.stringify({ ...Cart, [e.currentTarget.id]: Cart[id] ? Cart[id] + 1 : 1 })
    );
  };

  const onRemoveItem = (e: SyntheticEvent) => {
    const newCart = { ...Cart };
    delete newCart[e.currentTarget.id];
    setCart(newCart);
    localStorage.setItem("cart1", JSON.stringify(newCart));
  };

  const onShowCart = () => {
    setShowCart(!ShowCart);
  };

//   useEffect(() => {
//     console.log(Cart);
//   }, []);
  return (
    <>
      <div className="d-flex">
        <h1 className="text-primary end-0 start-0 text-center position-absolute">
          Order Here{" "}
        </h1>
        <span
          className="text-primary end-0 text-end position-absolute cursor-pointer mx-5 my-1"
          onClick={onShowCart}
        >
          <button type="button" className="btn btn-warning position-relative">
            <AiOutlineShoppingCart size={35} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {Object.keys(Cart).reduce((acc, item) => acc + Cart[item], 0)}
            </span>
          </button>
        </span>
      </div>
      <div className="d-flex justify-content-center gap-4 flex-wrap my-4">
        {menuItems.map((item: any, index: number) => (
          <div
            className="card col-10 col-md-4 col-lg-3 text-center mt-5 border"
            key={index}
          >
            <img
              src={item.imgLink}
              className="card-img-top w-100"
              alt="..."
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="p-3 bg-warning w-auto fs-3 fw-bold text-center">
                ${item.price}
              </p>
              {Cart[item.id] ? (
                <div className="d-flex gap-2 justify-content-center">
                    <button
                  className="btn btn-danger fw-bold fs-4 m-0"
                  onClick={onRemoveItem}
                  id={item.id}
                >
                  <span className="translate-middle-y">
                    <IoTrashOutline />
                  </span>
                </button>
                <button className="btn fw-bold fs-3">{Cart[item.id]}</button>
                <button
                className="btn btn-light px-2 fw-bold fs-4"
                id={item.id}
                onClick={onAddToCart}
                data-quantity={0}
              >
                <GrFormAdd color="#fff" />
              </button>
                </div>
              ) : (
                <button
                  className="btn btn-light px-2 fw-bold fs-4"
                  id={item.id}
                  onClick={onAddToCart}
                  data-quantity={0}
                >
                  Add to Cart <GrFormAdd color="#fff" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {ShowCart && <ShoppingCart items={Cart} onClose={onShowCart} />}
    </>
  );
};

export default Order;
