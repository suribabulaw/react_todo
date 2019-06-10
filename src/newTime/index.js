import React, { Component } from 'react'
import Todo from './todo'
import Newtods from './newTask'
export default class index extends Component {
    state ={todos :[]}
    newToday=( newData)=>{
        this.setState({ todos : [...this.state.todos,newData]})
    }
    remove = (id) =>{
        this.setState({todos: this.state.todos.filter(i => i.id !==  id) })
    }
    update=(id ,newUpdate)=>{
 
      const updatess =this.state.todos.map(i =>{
           if(i.id === id){
              return { ...i, task:newUpdate}
          }
              return i
          
      })
      this.setState({todos : updatess})

    }

    render() {
        const data=this.state.todos.map(i => {
            return <Todo 
            id={i.id}
            task={i.task}
            key={i.id}
            update={this.update}
             removetodos={this.remove}
               />
        })

        return (
            <div>
                 <br />
                <Newtods newToday={this.newToday}/>
                <ul>{data}</ul>
                
            </div>
        )
    }
}
