// import { useState, useEffect } from 'react'
// import Accordian from './Accordian';

// const Men = () => {
//     const [open,setOpen]=useState(false)

//     return (
//         <div className='max-w-6xl mt-10 mx-auto'>
//             <h1 className='font-bold text-xl mb-5'>Filter  Options</h1>
//             {
//                 ["Men","Women","Kids","Girls"].map((title,index)=>{
//                     <Accordian key={index} title={title} open={index===0?true:false} />
//                 })
//             }
//         </div>
//     )
// }

// export default Men;

import React, { useState } from 'react';
import Accordian from './Accordian';

const Men = () => {
    const [openIndex, setOpenIndex] = useState(null); // Track the index of the currently open accordion

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle the accordion
    };

    return (
        <div className='max-w-6xl mt-10 mx-auto'>
            <h1 className='font-bold text-xl mb-5'>Filter Options</h1>
            {
                ["Men", "Women", "Kids", "Girls"].map((title, index) => (
                    <Accordian 
                        key={index} 
                        title={title} 
                        open={openIndex === index} // Check if the accordion is open
                        setOpen={() => handleToggle(index)} // Function to toggle accordion
                    />
                ))
            }
        </div>
    );
};

export default Men;
