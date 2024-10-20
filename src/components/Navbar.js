import { useState } from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [Mode, setMode] = useState("Light")
    return (
        <div className="flex justify-between px-10 py-5 shadow-md">
            <h1 className='text-2xl font-bold'>LOGO</h1>
            <ul className="flex items-center gap-5 uppercase">
                <li><Link to="/men">MEN</Link></li>
                <li><Link to="/women">Women</Link></li>
                <li><Link to="/kid">Kids</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/grossory">Grossory</Link></li>
                <li>Cart</li>
                <button onClick={() => { Mode === "Light" ? setMode("Dark") : setMode("Light") }} 
                style={{ "width": "90px", "height": "35px", "backgroundColor": "green", "color": "white", "borderRadius": "50px" }}
                >{Mode}</button>
            </ul>
        </div>
    )
}

export default Navbar;