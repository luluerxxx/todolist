//创建“外壳”组件APP
import React,{Component} from "react";
// const {Component} = React
import Hello from "../02_src_hello_reac/components/Hello";

//创建并暴露APP组件
export default class App extends Component{
    render(){
        return(
            <div>
                <Hello/>
            </div>
        )
    }
}
