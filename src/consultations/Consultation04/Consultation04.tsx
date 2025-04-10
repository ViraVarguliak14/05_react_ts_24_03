import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import './styles.css'

function Consultation04() {

    const [invoiceAmount, setAmount] = useState<string>('');
    const [showTotalPrice, setShowTotalPrice] = useState<boolean>(false)

     const onChangeAmount = (event:ChangeEvent<HTMLInputElement>) =>{ 
            setAmount(event.target.value)
        }
        const showTotalPriceHandler = () => {
            setShowTotalPrice(!showTotalPrice)
        }
    
    return (
        <div className="consultation04-container">
            <Input name="invoice-amount"
            value={invoiceAmount}
            onChange={onChangeAmount}/>
            <Button name="SHOW FULL PRICE" onClick={showTotalPriceHandler}/>
            {showTotalPrice && 
            <div>
                {invoiceAmount}
            </div>}
        </div>
    )
}


export default Consultation04