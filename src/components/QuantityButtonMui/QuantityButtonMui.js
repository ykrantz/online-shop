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
        InputProps={{
          inputProps: {
            min: 0,
            max: 100,
            // placeholder: 0,

            style: {
              height: 2,
              // width: 5,
              textAlign: "center",
              // width: 30,
              // justifyContent: "center",
              alignContent: "center",
              // padding: "0 40px",
            },
          },
        }}
        // inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}

        onChange={(e) => handleUpdateQuantity(id, e.target.value)}
        value={getQuantityOfId(id)}
        InputLabelProps={{
          shrink: true,
        }}
        // size="small"
        // inputProps={{
        //   style: {
        //     height: 10,
        //     padding: "0 14px",
        //   },
        // }}
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
