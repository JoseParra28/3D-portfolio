import { div } from "framer-motion/client"
import React, {useState} from "react"

const Myform = () => {

    const [ name, setName] = useState("Guest")
    const [payment, setPayment] = useState("")

    function handleName(event){
        setName(event.target.value)
    }

    function paymentHandeler (event){
        setPayment(event.target.value)
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
        </div>
    )
}

export default Myform