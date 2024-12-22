import { Canvas } from "@react-three/fiber"
import { nav } from "framer-motion/m"
import { useState } from "react"


const Test = () => {

    const countState = useState(0)
    const count = countState[0]
    const setCount = countState[1]

    const buttonClick = ()=> {
        setCount(count + 1)
    }
    return (
        <div>
        <div className="badge text-bg-secondary">Click count: { count }</div>
        <button onClick={buttonClick}className="btn btn-success" >Click here</button>
        </div>
    )
}

export default Test