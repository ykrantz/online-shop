import { useContext } from "react";
import handleQuantity from "../../contex/handleQuantity";
import Item from "../Item/Item";
import "./Cart.css";

const Cart = ({ itemsList }) => {
  const { calcTotalCart } = useContext(handleQuantity);
  const itemsListLen = itemsList.length;
  return (
    <div className="Cart-div">
      <h1 className="Cart-header">
        <b>cart:</b>
      </h1>
      <br></br>
      {itemsListLen
        ? itemsList.map((item) => (
            <Item key={item.id} id={item.id} quantity={item.quantity} />
          ))
        : "No items in cart"}
      <br></br>
      <br></br>
      <h5 className="Cart-total">
        Total: {Number(calcTotalCart()).toFixed(1)} $
      </h5>
    </div>
  );
};

export default Cart;
