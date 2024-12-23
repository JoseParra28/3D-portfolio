
import { div } from "framer-motion/m"
import React, {useState} from "react"

const Component = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1 )
    }

    const decrement = () => {
        setCount(count - 1 )
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className="counter-container">
        <h1 className="count-display">Counter: {count}</h1>
        <button onClick={increment} className="counter-button btn btn-success">Increase</button>
        <button onClick={decrement} className="counter-button btn btn-danger">Decrease</button>
        <button onClick={reset} className="counter-button btn btn-warning">Reset</button>
        </div>
    )
}

export default Component