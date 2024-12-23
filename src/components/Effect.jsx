import { h1 } from "framer-motion/client"
import React, {useEffect, useState} from "react"

const Effect = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count: ${count}`
    })

    function AddCount () {
        setCount(c => c + 1)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button className="btn " onClick={AddCount}>Add</button>
        </div>
      
    )
}

export default Effect