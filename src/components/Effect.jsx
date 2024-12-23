import { h1 } from "framer-motion/client"
import React, {useEffect, useState} from "react"

const Effect = () => {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")

    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count])

    function AddCount () {
        setCount(c => c + 1)
    }

    function RemoveCount () {
        setCount(c => c - 1)
    }

    function changeColor () {
        setColor(c => c === "green" ? "red" : "green")
    }

    return (
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button className="btn " onClick={AddCount}>Add</button>
            <button className="btn " onClick={RemoveCount}>Remove</button><br />

            <button onClick={changeColor}>Change color</button>
        </div>
      
    )
}

export default Effect