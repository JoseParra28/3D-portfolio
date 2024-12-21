import { Canvas } from "@react-three/fiber"
import { h1, input } from "framer-motion/client"


const Test = () => {
    let nameN = 'Jose';
    let count = 0;
    const handleClick = (name) => {
    if(count < 3 ){
        count++;
        console.log(`${name} you clicked me ${count} times`)
    } else {
        console.log(`${name} stop clicking!!`)
    };
    }
    const styles = {
            backgroundColor: "hsl(200,100%, 50%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",   
    }

    return (
        <button onClick={() => handleClick(nameN)} style={styles}>Click me</button>
    )
}

export default Test