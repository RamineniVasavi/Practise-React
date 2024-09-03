import { Component } from "react";
import Userclass from "./Userclass";
import Usecontext from "../utils/Usecontext";
class About extends Component{
    constructor(props){
        super(props);
        console.log("parent Constructor");
        this.state={
            userInfo:{
            name:"Vasavi",
            location:"AP",
            avatar_url:"https://dummy"
        }
    }
    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/RamineniVasavi");
        const json=await data.json();
        this.setState({userInfo:json,});
        console.log("parent component did mount");
    }
    render(){
        console.log("parent render");
        const {name,location,avatar_url}=this.state.userInfo;
        return <div>
        <h1>Hello</h1>
         {/* context access   */}
        <Usecontext.Consumer>
            {({ loggesuser })=> (loggesuser)}
        </Usecontext.Consumer>
        <h2>This about component to learn routing and classes</h2>
        <Userclass name={name+" from class"} location={location} avatar_url={avatar_url}/>
        <Userclass name={"Vasavi 1st class"} location={"TPT"}/>
        <Userclass name={"Vasavi 2nd class"} location={"Chittoor"}/>

    </div>
    }
}
export default About;