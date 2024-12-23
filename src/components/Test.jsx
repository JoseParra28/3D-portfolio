import { Canvas } from "@react-three/fiber"
import { nav } from "framer-motion/m"
import React, { useEffect, useState } from "react"


const Test = () => {

    const [ name, setName] = useState("Guest")
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("Jose")
    }

    const incrementAge = () => {
        setAge(age + 1)
        if(age >= 5 ){
            setName("You are over aged")
        }
    }

    const toggleEmployStatus = () => {
        setIsEmployed(! isEmployed)
    }

    return (
        <div>
       <p className="bold">Name: {name} </p>
       <button onClick={updateName} className="btn btn-warning">Set name</button>

       <p>Name: {age} </p>
       <button onClick={incrementAge} className="btn btn-warning">Set age</button>

       <p>Is Emplyed: {isEmployed ? "Yes" : "No"} </p>
       <button onClick={toggleEmployStatus} className="btn btn-warning">Toggle status</button>
        </div>
    )
}

export default Test