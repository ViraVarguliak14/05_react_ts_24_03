import { ProductProps } from "./types";
import './styles.css'

function Product ({name, price}: ProductProps) {
    return (
        <div className="product-container">
        <h2>{name}</h2>
        <p>{price.toFixed(2)}</p>
        </div>
    )
}

export default Product;