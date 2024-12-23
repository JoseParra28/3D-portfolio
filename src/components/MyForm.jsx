import { div } from "framer-motion/client"
import React, {useState} from "react"

const Myform = () => {

    const [ name, setName] = useState("Guest")

    function handleName(event){
        setName(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleName} type="text" />
            <p>Name: {name}</p>
        </div>
    )
}

export default Myform