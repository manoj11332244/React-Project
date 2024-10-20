import React from 'react';

class Detail extends React.Component{

    // constructor(props){
    //     super(props);
    //     // this.state={
    //     //     count: 0,
    //     // }
    // }
    
    constructor(){
        super();

        this.state={
            mydata: null,
        }
    }

    async componentDidMount(){
        let data= await fetch('https://api.github.com/users/manoj11332244')
        let resData= await data.json()
        this.setState({
            mydata: resData,
        })
        console.log(this.state.mydata)
    }

    render(){
        if(this.state.mydata === null){
            return <h1>Loading....</h1>
        }
        const {name,location, html_url} = this.state.mydata;
        return  (
            <div>
                <h1>Name :- {name}</h1>
                <h1>Location :- {location}</h1>
                <h1>Email :- abc@gmail.com</h1>
                <h1>Link :- {html_url}</h1>
                {/* <h1>Count :- {this.state.count}</h1> */}
                {/* <button onClick={()=>{
                    this.setState( {
                        count : this.state.count+1
                    })
                }}>increasement</button> */}
            </div>
        )
    }
};

export default Detail;