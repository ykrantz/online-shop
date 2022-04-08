import "./ProductIMui.css";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import QuantityButton from "../QuantityButton/QuantityButton";
import { minHeight } from "@mui/system";
import QuantityButtonMui from "../QuantityButtonMui/QuantityButtonMui";

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

const ExpandMore = styled(
  (
    props
    // : ExpandMoreProps
  ) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  }
)(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductIMui({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="ProductMui-product-card">
      {/* <div className="ProductMui-div-image">
        <img className="ProductMui-image" src={image} />
      </div>
      <div className="ProductMui-ProductMui-info">
        <QuantityButton id={id} />
        <h5>{title}</h5>
        <h6>{description.substring(0, 100)}</h6>
        <h5>price: {price} $</h5>
        <h4>category: {category}</h4>
        <h6>rating: {rating.rate}</h6>
        <h6>rating count: {rating.count}</h6>
      </div> */}

      <Card sx={{ maxWidth: 345, minHeight: 700 }}>
        <CardHeader
          // avatar={
          //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          //     R
          //   </Avatar>
          // }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          sx={{ minHeight: 150 }}
          title={title}
          titleTypographyProps={{ variant: "p" }}
          subheader={category}
          className="ProductMui-header"
        />
        <div className="ProductMui-image-div">
          <div className="ProductMui-image">
            <CardMedia
              // sx={{ maxHeight: 300 }}
              component="img"
              // height="300"
              image={image}
              alt={title}
              // className="ProductMui-image"
            />
          </div>
        </div>
        <QuantityButtonMui id={id} />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            className="ProductMui-product-info"
          >
            <Typography fontWeight={"medium"}>price: {price} $</Typography>
            <Typography fontWeight={"light"}>rating: {rating.rate}</Typography>
            <Typography fontWeight={"light"}>
              rating count: {rating.count}
            </Typography>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton> */}
          {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Description:</Typography>
            <Typography paragraph>{description.substring(0, 100)}</Typography>

            <Typography paragraph></Typography>
            <Typography></Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
