import React from "react";

class Userclass extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.name +"child constructor");
        this.state={
            count:0,
            count2:2
        }
    }
    componentDidMount(){
        console.log(this.props.name+"child component did mount");
    }
    render(){
        console.log(this.props.name+"child render");
        const {name,location,avatar_url}=this.props;
        const {count,count2}=this.state;
        console.log({avatar_url});
        return <div className="class-card">
            <img style={avatar_url!=undefined?{"margin":"10px","height":"100px"} : {"display":"none"}} src={avatar_url}/>
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