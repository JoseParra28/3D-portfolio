import { Canvas } from "@react-three/fiber"
import { nav } from "framer-motion/m"
import { useEffect, useState } from "react"


const Test = () => {

    const [count, setCount] = useState(0)

    useEffect(() => { 
        const saveCount = parseInt(localStorage.getItem('count') ?? )
        console.log(saveCount)
     }, [])

    useEffect(() => {
        localStorage.setItem('count', count)
    }, [count ])


    const buttonClick = ()=> {
        setCount(value => value + 1)
        
    }
    return (
        <div>
        <div className="badge text-bg-secondary">Click count: { count }</div>
        <button onClick={buttonClick}className="btn btn-success" >Click here</button>
        </div>
    )
}

export default Test