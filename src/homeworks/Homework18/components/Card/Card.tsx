import Message from "../Message/Message"
import { CardTitle, CardWrapper } from "./styles"


function Card() {
    return (
      <CardWrapper>
        <CardTitle>Section Block</CardTitle>
        <Message />
      </CardWrapper>
    )
  }
  
  export default Card