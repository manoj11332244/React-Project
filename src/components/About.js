import Detail from './Detail';
import { useContext } from 'react';
import userContext from '../utils/userContext'

const About=()=>{
    const user = useContext(userContext)
    return(
        <div>
           <h1 style={{borderBottom: "1px solid black", paddingTop:"3vw", paddingBottom:"2vw" , textAlign: "center"}}> About Page</h1>
           <Detail name="Manoj" location="Delhi" />
           <div className='border border-gray-300 p-20'>
            <p>username : {user.name}</p>
           </div>
        </div>
    )
}

export default About;