
import React, { useState } from 'react';

import './App.css'

function Fruit(){
    
    const [visible, setvisible] = useState(true);

    // array of fruits
    const list_fruit=["Apple", "Banana", "Strawberry", "Mango","Pineapple"]

    // change the value to visible if it's true then into false and vice versa
    const On_Toggle = () => {
        setvisible(!visible);
    }

    return (
        <div className="App">
            <h1>FAVORITE FRUITS</h1>
            <div >
                
            {!visible && (
           <ol>
            {/* using the map method to create list items */}
           {list_fruit.map((fruit, index) => (
             <li key={index}>{fruit}</li>
           ))}
         </ol>

            )}

            <button className='sub-btn' onClick={On_Toggle}>Show List</button>
            </div>
        </div>
    )
}

export default Fruit;
