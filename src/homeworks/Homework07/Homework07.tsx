import { v4 } from "uuid"

import ProductCard from "../../components/Product/Products"
import { products } from "./data"
import './styles.css'
import { Product } from "./types"



function Homework07(){
  const productCards = products.map((productObj:Product) =>{
    return<ProductCard
    key={v4()}
    productName={productObj.name}
    productPrice={productObj.price}/>
  })
  
  return(
  <div className="homework07-container">
    {productCards}
  </div>
)
}
console.log(products);



export default Homework07