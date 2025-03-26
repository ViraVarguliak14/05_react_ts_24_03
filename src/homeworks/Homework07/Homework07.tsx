import { v4 } from "uuid"

import Product from "../../components/Product/Products"
import { products } from "./data"
import './styles.css'



function Homework07(){
  const productCards = products.map((product) =>{
    return<Product
    key={v4()}
    name={product.name}
    price={product.price}/>
  })
  
  return(
  <div className="container">
    {productCards}
  </div>
)
}
console.log(products);



export default Homework07