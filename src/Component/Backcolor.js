import React, { useState } from 'react';

import './App.css'


function Background_Color_Change() {


    const [selectcolor, setselectcolor] = useState('');

    const setcolor = (e) => {
        setselectcolor(e.target.value);
    }

    return (
        <div className='backgound_color_div' style={{ backgroundColor: selectcolor }}
        >
           
            <select className='sub-btn change_color_btn' value={selectcolor} onChange={setcolor}>
                <option value="">Select a color</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
        </div>
       
    )
}

export default Background_Color_Change;