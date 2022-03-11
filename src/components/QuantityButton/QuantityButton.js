import { useContext } from "react";
import handleQuantity from "../../contex/handleQuantity";
import "./QuantityButton.css";

const QuantityButton = ({ id }) => {
  const { handleUpdateQuantity } = useContext(handleQuantity);
  const { getQuantityOfId } = useContext(handleQuantity);
  return (
    <input
      className="QuantityButton-number"
      type="number"
      min="0"
      onChange={(e) => handleUpdateQuantity(id, e.target.value)}
      value={getQuantityOfId(id)}
    ></input>
  );
};
export default QuantityButton;
