import Product from "../Product/Product";
import "./Products.css";

const Products = ({ productsList }) => {
  const products = productsList.map(
    ({ id, title, price, description, category, image, rating }) => (
      <Product
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
        rating={rating}
      />
    )
  );
  return <div className="Products-products">{products}</div>;
};

export default Products;
