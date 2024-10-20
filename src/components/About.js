import Detail from './Detail';

const About=()=>{
    return(
        <div>
           <h1 style={{borderBottom: "1px solid black", paddingTop:"3vw", paddingBottom:"2vw" , textAlign: "center"}}> About Page</h1>
           <Detail name="Manoj" location="Delhi" />
        </div>
    )
}

export default About;