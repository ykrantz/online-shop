import QuantityButton from "../QuantityButton/QuantityButton";
import "./Product.css";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => (
  <div className="Product-product-card">
    <div className="Product-div-image">
      <img className="Product-image" src={image} />
    </div>
    <div className="Product-product-info">
      <QuantityButton id={id} />
      <h5>{title}</h5>
      <h6>{description.substring(0, 100)}</h6>
      <h5>price: {price} $</h5>
      <h4>category: {category}</h4>
      <h6>rating: {rating.rate}</h6>
      <h6>rating count: {rating.count}</h6>
    </div>
  </div>
);

export default Product;
