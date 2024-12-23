import { Canvas } from "@react-three/fiber"
import { nav } from "framer-motion/m"
import React, { useEffect, useState } from "react"


const Test = () => {

    const [ name, setName] = useState("Guest")
    const [age, setAge] = useState(0)

    const updateName = () => {
        setName("Jose")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }
    return (
        <div>
       <p>Name: {name} </p>
       <button onClick={updateName} className="btn btn-warning">Set name</button>

       <p>Name: {age} </p>
       <button onClick={incrementAge} className="btn btn-warning">Set age</button>
        </div>
    )
}

export default Test