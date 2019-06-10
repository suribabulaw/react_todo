import React, { Component } from 'react'
import Todo from './todo'
import NewTodo from './NewTodotask'
export default class index extends Component {
     state = { dotos  :   []
     }
     createNew = (newTask) => {
         this.setState({ 
             dotos : [...this.state.dotos ,newTask]
         })
     }
     remove = (id) => {
     this.setState({ dotos : this.state.dotos.filter(i => i.id !== id) })
     }
 updateTask =(id,updatee) => {
   const updateTodos = this.state.dotos.map(i => {
      if(i.id === id){
          return { ...i , task: updatee}
      }
      return i
   });
   this.setState({dotos : updateTodos })
 }

    render() {
        const todo = this.state.dotos.map( todo=> {
            return  (<Todo updateTods={this.updateTask} remomeTodo={this.remove} id={todo.id} key={todo.id} task={todo.task} />)
        })
        return (
            <div>
                <p>pleace add todo app</p>

                <NewTodo task={this.createNew} />
                <ul> {todo}</ul>

              
            </div>
        )
    }
}
