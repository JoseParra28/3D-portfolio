import { div } from "framer-motion/client"
import React, {useState} from "react"

const Myform = () => {

    const [ name, setName] = useState("Guest")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")

    function handleName(event){
        setName(event.target.value)
    }

    function paymentHandeler (event){
        setPayment(event.target.value)
    }

    function handleShipping (event){
        setShipping(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleName} type="text" />
            <p>Name: {name}</p>

        <select onChange={paymentHandeler} value="Payment" id="">
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Revolut">Revolut</option>
        </select>
        <p>Payment: {payment}</p>

        <label >
            <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShipping} />
            Pick up </label> 
        <label >
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShipping} />
        Delivery </label> 
        <p>Shipping: {shipping}</p>
        </div>
    )
}

export default Myform