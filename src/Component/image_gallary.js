import React, { useState } from 'react';

import './App.css'


function Image_Gallary() {

    // Storing the images url
    const image=["https://tse4.mm.bing.net/th?id=OIP.m4FmOjk0Bx-N4JaBzsBoTgHaEP&pid=Api&P=0&h=220","https://tse3.mm.bing.net/th?id=OIP.r6ZlFGWZmzdrK5xxzjgrAgHaE8&pid=Api&P=0&h=220","https://tse1.mm.bing.net/th?id=OIP.RciXrncbXFTnfynsyiluOQAAAA&pid=Api&P=0&h=220","https://tse4.mm.bing.net/th?id=OIP.VhF7TX0lDU_zVLiyZOwzTgHaEo&pid=Api&P=0&h=220","https://tse2.mm.bing.net/th?id=OIP.OdBPOyeHGykIAvBJFzCPmwHaEK&pid=Api&P=0&h=220","https://tse3.mm.bing.net/th?id=OIP.c4MCiDFgSGLsR_7-4-j0PwHaEK&pid=Api&P=0&h=220"]

   const [index,setindex]=useState(0)

   const previousimage=()=>{
    setindex((prevIndex) => (prevIndex === 0 ? image.length - 1 : prevIndex - 1))
   }


   const nextimage=()=>{
    setindex((index+1)%5)
   }

    return (
        <div className="App">
           <div >
           <img src={image[index]} className='form gallary_img ' />
            

            

           <button onClick={previousimage} className='sub-btn'>Previous</button>
           <button className='sub-btn' onClick={nextimage}>Next</button>
           </div>
        </div>
    )
}

export default Image_Gallary;