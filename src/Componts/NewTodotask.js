import React, { Component } from 'react'
import uuid from 'uuid'

export default class NewTodotask extends Component {
    state = {task : ""}
    handleChange= (e) => {
        this.setState({task : e.target.value})
    }
    handlerSubmit=(e)=>{
        e.preventDefault();
        this.props.task({...this.state ,id : uuid()})
        this.setState({task:''})

    }
    render() {
        return (
            <div>
                <form  onSubmit = {this.handlerSubmit }>
                      <input type='text'
                       name ='task'
                       onChange={this.handleChange}
                       value= {this.state.task} />
                      <button>submit</button>
                </form>
            </div>
        )
    }
}
