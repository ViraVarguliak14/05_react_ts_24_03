import { ProductProps } from "./types";
import "./styles.css";

function Product({ productName, productPrice }: ProductProps) {
  return (
    <div className="product-container">
      <h2>Product: {productName}</h2>
      <p>Price: {productPrice.toFixed(2)}</p>
    </div>
  );
}

export default Product;
