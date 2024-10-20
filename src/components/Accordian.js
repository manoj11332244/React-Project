import React, { useState } from 'react'
import ListItem from './ListItem'

// const Accordian = ({title, open ,setOpen}) => {
  

//   const showItem = () =>{
//     // setOpen()
//   }

//   return (
//     <div className='w-52 px-3 py-1 border border-gray-400  round rounded-md items-center shadow-md my-1'>
//        <div className='flex justify-between'>
//        <h1>{title}</h1>
//        <button className='border bg-black text-white py-1 px-2 rounded-lg' onClick={showItem}>show</button>
//        </div>
//        {
//         open && <ListItem />
//        }
//     </div>
//   )
// }

// export default Accordian


const Accordian = ({ title, open, setOpen }) => {

  return (
    <div className='w-52 px-3 py-1 border border-gray-400 rounded-md items-center shadow-md my-1'>
      <div className='flex justify-between'>
        <h1>{title}</h1>
        <button className='border bg-black text-white py-1 px-2 rounded-lg' onClick={setOpen}>
          {open ? 'Hide' : 'Show'}
        </button>
      </div>
      {
        open && <ListItem items={["Men", "Women", "Kids", "Girls"]} /> // Ensure you pass the items if you refactor ListItem
      }
    </div>
  );
};

export default Accordian;
