import { Canvas } from "@react-three/fiber"
import { nav } from "framer-motion/m"
import { useState } from "react"


const Test = () => {

    const countState = useState(0)
    console.log(countState)

    let count = 0
    const buttonClick = ()=> {
        console.log("button clicked")
    }
    return (
        <div>
        <div className="badge text-bg-secondary">Click count: { count }</div>
        <button onClick={buttonClick}className="btn btn-success" >Click here</button>
        </div>
    )
}

export default Test