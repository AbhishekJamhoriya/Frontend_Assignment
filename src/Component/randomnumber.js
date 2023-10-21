import React, { useState } from 'react';

import './App.css';


const random_number=Math.floor(Math.random() * 11);

function Odd_Even() {

  // using the react hook to store the value of entered by user
  const [number,setnumber]=useState(0);

   // using the react hook to store the number of attempts that is 3
  const [attempts, setAttempts] = useState(3);

  // change the values if user changes it
  const handlenumber=(e)=>{
    console.log(random_number)
    setnumber(e.target.value)
    
  }

  // function to show whether the entered number is correct or not
  const showevenodd=(e)=>{
    // decreasing the attempts by 1 each time
    setAttempts(attempts-1)
    e.preventDefault();

    // if attempts are less then 3 then this if condition will run
    if(attempts>0){
      if(number==random_number){
        alert("Your Guess is Correct")
      }
      else if(number>random_number){
        alert("Number is High")
      }
      else{
          alert("Number is Low")
      }
    }
    else{
      alert("Out of attempts")
    }
    
  }

  return (
    <div className='App'>

    
      <form className="form" onSubmit={showevenodd}>
      <h1>GUESS THE NUMBER</h1>
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