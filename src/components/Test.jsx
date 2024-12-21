import { Canvas } from "@react-three/fiber"
import { h1, input } from "framer-motion/client"
import { nav } from "framer-motion/m"


const Test = () => {
    const navBar  = ["Home", "About", "Experience", "Contact"]

    const handleClick  = () => {
        console.log(`Yuo have clicked item ${navBar[0]}`)
    }
    

    return (
        
     <nav className="nav">
        <div className="logo-div">
            <div className="logo">WebDev</div>
        </div>
      <ul className="nav justify-content-end">
         <li className="nav-item">
          <a onClick={ handleClick } className="nav-link active" aria-current="page" href="#">{navBar[0]}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{navBar[1]}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{navBar[2]}</a>
       </li>
        <li className="nav-item">
         <a className="nav-link disabled" aria-disabled="true">{navBar[3]}</a>
      </li>
    </ul>
 </nav>
    )
}

export default Test