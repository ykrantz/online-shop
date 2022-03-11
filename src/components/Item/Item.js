import { useContext } from "react";
import handleQuantity from "../../contex/handleQuantity";
import QuantityButton from "../QuantityButton/QuantityButton";
import "./Item.css";

const Item = ({ id, quantity }) => {
  // TODO: get details
  //   console.log("SS");
  // itemsList: itemsList,
  // handleUpdateQuantity: handleUpdateQuantity,
  // initProductsList: initProductsList,
  //   const { handleUpdateQuantity } = useContext(handleQuantity);
  const { getProductDetailsByID } = useContext(handleQuantity);
  const { handleUpdateQuantity } = useContext(handleQuantity);
  const productDetails = getProductDetailsByID(id);
  return (
    <>
      <h3 className="Item-details">
        <b> {productDetails.title} </b>
      </h3>
      <h6>
        <b> price:</b>
        {productDetails.price} $
      </h6>
      <QuantityButton id={id} />
      <button
        className="Item-delete"
        onClick={() => handleUpdateQuantity(id, "0")}
      >
        ❌
      </button>
    </>
  );
};

export default Item;
