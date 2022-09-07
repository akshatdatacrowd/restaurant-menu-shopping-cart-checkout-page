import { useState } from "react";
import { Link } from "react-router-dom";
import menuItems from "./assets/menu";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  items: any;
  onClose: any;
};

const ShoppingCart = ({ items, onClose }: Props) => {
  return (
    <>
      <div className="top-0 end-0 position-fixed m-4 bg-light rounded border border-3 border-dark fw-bold p-4">
        <h2 className="text-info fw-bold">
          Shopping Cart{" "}
          <span onClick={onClose} className="cursor-pointer text-danger">
            <AiOutlineClose />
          </span>
        </h2>
        {Object.keys(items).length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <div>
            <ul>
              {Object.keys(items).map((item: any, index: number) => (
                <li key={index}>
                  {items[item]}
                  <span className="px-2 text-primary fw-bold">x</span>
                  {menuItems[item - 1].name}{" "}
                  <span className="text-danger fs-5">
                    ${menuItems[item - 1].price * items[item]}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-end fw-bold">
              Subtotal: $
              {Object.keys(items).reduce(
                (acc: number, item: any) =>
                  acc + menuItems[item - 1].price * items[item],
                0
              )}
            </p>

            <div className="text-end">
              <Link to="/checkout">
                <button className="mx-auto btn btn-success fw-bold">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
