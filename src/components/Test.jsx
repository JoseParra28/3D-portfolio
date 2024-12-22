import { Canvas } from "@react-three/fiber"
import { div, h1, input } from "framer-motion/client"
import { nav } from "framer-motion/m"


const Test = () => {

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