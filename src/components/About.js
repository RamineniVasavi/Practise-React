import { Component } from "react";
import Userclass from "./Userclass";
class About extends Component{
    constructor(props){
        super(props);
        console.log("parent Constructor");
    }
    componentDidMount(){
        console.log("parent component did mount");
    }
    render(){
        console.log("parent render");
        return <div>
        <h1>Hello</h1>
        <h2>This about component to learn routing and classes</h2>
        <Userclass name={"Vasavi Ramineni from class"} location={"Banglore"}/>
    </div>
    }
}
export default About;