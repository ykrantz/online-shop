import { useContext } from "react";
import handleShowProduct from "../../contex/handleShowProduct";
import {Link,useParams} from "react-router-dom"


const ProductPage=(
    // {
        //   id
        // title,
        // price,
        // description,
        // category,
        // image,
        // rating,
    //   }
      ) => {
      const {newProductsListMain}=useContext(handleShowProduct)
      const {goToProduct}=useContext(handleShowProduct)
const {id}=useParams()
console.log("par",id);

const productDitails=newProductsListMain.find(product=>product.id==id)
console.log(productDitails);
console.log(newProductsListMain);

const {image,title,description,price,category,rating}=productDitails        
// const [image,title,description,price,category,rating]=["","","","","",""]

        // const { goToProduct } = useContext(handleShowProduct);
        return (
          <div className="Product-product-card">
            <Link to="/">go to home page</Link>
            <div className="Product-product-image">
              <img src={image} />
            </div>
            <div className="Product-product-info">
              {/* <QuantityButton id={id} /> */}
              <h5 onClick={() => goToProduct(id)}>{title}</h5>
              {/* <h5 onClick={() => alert("ddd")}>{title}</h5> */}
              <h6>{description.substring(0, 100)}</h6>
              <h5>price: {price} $</h5>
              <h4>category: {category}</h4>
              <h6>rating: {rating?.rate}</h6>
              <h6>rating count: {rating?.count}</h6>
            </div>
          </div>
        );
      };
      
export default ProductPage