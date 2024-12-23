import React, {useState} from "react"
const ColorPicker = () => {

    const [ color, setColor] = useState("#ffffff")

    function handleColorChange (pick)
 {
    setColor(pick.target.value)
 }
    return (
        <div className="color-picker-container"> 
        <h1>Color picker</h1>
        <div className="color-display" style={{backgroundColor: color}}>
            <p>Selecter color: {color}</p>
            <label >Select a color</label>
            <input type="color" value={color} onChange={handleColorChange}/>

        </div>
        </div>
    )
}

export default ColorPicker