import React from "react";

class Userclass extends React.Component{
    constructor(props){
        super(props);
        console.log("child constructor");
        this.state={
            count:0,
            count2:2
        }
    }
    componentDidMount(){
        console.log("child component did mount");
    }
    render(){
        console.log("child render");
        const {name,location}=this.props;
        const {count,count2}=this.state;
        return <div className="class-card">
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h3>State 1: {count} <br /> State 2: {count2} </h3>
            <button onClick={()=>{
                this.setState({
                   count:count+1,
                   count2:this.state.count2+1,
                });
            }}>Click to update count</button>
            <h3>contact : vasavir</h3>
        </div>
    }
}
export default Userclass;