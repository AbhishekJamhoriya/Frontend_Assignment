import React, { useState } from 'react';

import './App.css'


function Toggle_Text() {

    // React hooks to store the values of visible
    const [visible, setvisible] = useState(false);

    // the function will the change the value ot visible to true and false alternatively whenever the use will click submit button
    const On_Toggle = () => {
        setvisible(!visible);
    }

    return (
        <div className="App">
            <div className='form toggle_div'>
                <h1>Toggle Text</h1>
                {/* if visible is true then only the below pragraph tag will visible  */}
            {!visible && (
                <p>Diwali, also known as Deepavali, is one of the most popular and widely celebrated festivals in India and by Indian communities worldwide. It is a festival of lights and signifies the victory of light over darkness and good over evil. Diwali typically lasts for five days, with the main day of celebration falling on the third day.

                    Here are some key aspects and traditions associated with Diwali:

                    Date: Diwali is observed in October or November each year, depending on the Hindu lunar calendar. The exact date varies, and it typically falls on the new moon night.

                    Lamps and Lights: The most prominent feature of Diwali is the lighting of lamps and candles. Homes, streets, and public places are decorated with illuminated oil lamps (diyas), candles, and colorful electric lights. The idea is to drive away darkness and evil.

                    Rangoli: People create colorful rangoli designs at the entrance of their homes. Rangoli is a decorative art form made using colored powders, rice, flower petals, or other materials.

                    Prayers and Worship: People offer prayers to various deities, depending on their regional and cultural preferences. Lakshmi, the goddess of wealth and prosperity, is widely worshipped during Diwali. Many people also visit temples.

                    Fireworks: Fireworks are an integral part of Diwali celebrations. The night sky is filled with colorful and vibrant displays of fireworks. However, in recent years, there has been growing awareness about the environmental impact and safety concerns associated with fireworks.



                </p>
              
            )}

            <button className='sub-btn' onClick={On_Toggle}>toggle</button>
            </div>
        </div>
    )
}

export default Toggle_Text;