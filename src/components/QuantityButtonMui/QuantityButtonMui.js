import { useContext } from "react";
import handleQuantity from "../../contex/handleQuantity";
import "./QuantityButtonMui.css";

import TextField from "@mui/material/TextField";

const QuantityButtonMui = ({ id }) => {
  const { handleUpdateQuantity } = useContext(handleQuantity);
  const { getQuantityOfId } = useContext(handleQuantity);
  return (
    <div className="QuantityButtonMui-div-number">
      <TextField
        className="QuantityButtonMui-number"
        id="outlined-number"
        // label="Number"
        //
        type="number"
        InputProps={{ inputProps: { min: 0, max: 100 } }}
        // inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}

        onChange={(e) => handleUpdateQuantity(id, e.target.value)}
        value={getQuantityOfId(id)}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
    // <input
    //   className="QuantityButton-number"
    //   type="number"
    //   min="0"
    //   max="100"
    //   onChange={(e) => handleUpdateQuantity(id, e.target.value)}
    //   value={getQuantityOfId(id)}
    // ></input>
  );
};
export default QuantityButtonMui;
