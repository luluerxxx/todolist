import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  //初始化状态
  state = {todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:true},
    {id:'003',name:'打代码',done:false}
  ]}
  //addTodo用于添加一个todo，接收的参数是todo对象
  addTodo = (todoObj)=>{
    //获取原todos
    const {todos} = this.state
    //追加一个todo
    const newTodos = [todoObj,...todos]
    //更新状态
    this.setState({todos:newTodos})
  }

  //updateTodo用于更新一个todo对象
  updateTodo = (id,done)=>{
    //获取状态中的todos
    const {todos} = this.state
    //匹配处理数据
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  //deleteTodo用于删除一个todo对象
  deleteTodo = (id)=>{
    //获取原来的数据
    const {todos} = this.state
    //删除指定Id的todo对象
    const newTodos =todos.filter(todoObj => {return todoObj.id !== id})
    this.setState({todos:newTodos})
  }

  render() {
    const  {todos} =this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo ={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos}/>
        </div>
      </div>
    )
  }
}
