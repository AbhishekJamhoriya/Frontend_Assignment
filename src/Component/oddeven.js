import React, { useState } from 'react';

import './App.css';

function Odd_Even() {

  // using react hook to store the value
  const [number,setnumber]=useState(0);

  // getting the value of entered number
  const handlenumber=(e)=>{
    setnumber(e.target.value)
  }

  // To show if the entered number is odd or even
  const showevenodd=(e)=>{
    e.preventDefault();

    // if the number is divisible by 2 then it is even
    if(number%2===0){
      alert("Number is Even")
    }
    // if the number is not divisible by 2 then it is odd
    else{
      alert("Number is Odd")
    }
  }

  return (
    <div className='App'>

    
      <form className="form" onSubmit={showevenodd}>
      <h1>ODD EVEN NUMBER</h1>
        <div className="div_css">
          <lable>Select a Number</lable>
          <input className='form_input_field' type="number" name={number} onChange={handlenumber} />
        </div>

        <div className='div_css'>
          <button className='sub-btn' type="submit">Submit</button>
        </div>

      </form>
     
    </div>
  )
}


export default Odd_Even;