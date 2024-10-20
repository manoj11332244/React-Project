import {useState} from 'react'

const Count= ()=>{
    let[data,setData]=useState(0)

    return(
        <div>
            <button onClick={()=>{
                data=data+1;
                setData(data)
                console.log(setData)
            }} style={{"marginTop":"20px"}}>Click</button>
            <h1>Count is: {data}</h1>
        </div>
    )
}

export default Count;