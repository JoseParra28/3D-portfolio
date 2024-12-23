import React, {useState} from "react"
import { element } from "three/tsl";

const MyComponents = () =>{

    const [foods, setFoods] = useState(["Apple", "Orange", "Coconut"])

    function addElement () {
        const newFood = document.getElementById("food-input").value;
        document.getElementById("food-input").value = "";

        setFoods(f => [...f, newFood])
    }
    function removeElement (index) {
        setFoods(foods.filter((_, i) => i !== index))
    }

    return (
        <div>
            <h2>List of foods</h2>
            <ul>{foods.map((food, index) => <li key={index} onClick={() => removeElement(index)}>{food}</li>)}</ul>
            <input type="text" id="food-input" placeholder="Enter food name" />
            <buttono onClick={addElement}>Add food</buttono>
        </div>
    )
}

export default MyComponents