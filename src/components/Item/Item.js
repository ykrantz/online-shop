import { Box, Button } from "@material-ui/core";
import { useContext } from "react";
import handleQuantity from "../../contex/handleQuantity";
// import QuantityButton from "../QuantityButton/QuantityButton";
import QuantityButtonMui from "../QuantityButtonMui/QuantityButtonMui";
import "./Item.css";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Item = ({ id }) => {
  const { handleUpdateQuantity, getProductDetailsByID } =
    useContext(handleQuantity);
  const productDetails = getProductDetailsByID(id);
  return (
    <div>
      <div className="Item-item-allDetails">
        <h3 className="Item-details">
          <b> {productDetails.title} </b>
        </h3>
        <h6>
          <b> price: </b>
          {productDetails.price} $
        </h6>
      </div>
      <div className="Item-quantity">
        <QuantityButtonMui id={id} />

        <Box>
          <Button
            variant="text"
            // sx={{ m: 5 }}
            className="Item-delete"
            onClick={() => handleUpdateQuantity(id, "0")}
          >
            <DeleteForeverIcon />
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Item;
