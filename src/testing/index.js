import React, { Component } from 'react'
import Todos from './todo'
import NewTods from './NewTodos'

export default class index extends Component {
    state = {todos : []}
    create=(newOne) => {
       this.setState({
           todos : [ ...this.state.todos ,newOne]
       }) 
    }

    render() {
        const data = this.state.todos.map(todo => (
          <Todos key={todo.id} task={todo.task}/>
        ))
        return (
            <div><br />
                <NewTods newTodos={this.create}/> 
                <ul>{data}</ul> 
            </div>
        )
    }
}
