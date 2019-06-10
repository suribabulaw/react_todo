import React, { Component } from 'react'
import uuid from 'uuid/v4'


export default class NewTodos extends Component {
    state = { task : ''}
    handleChange = (e) => {
       this.setState({task : e.target.value})   
    }
    handleSubmit= (e) => { 
        e.preventDefault();
        this.props.newTodos({...this.state , id:uuid() })
        this.setState({task : ''})

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input 
                         name = "task"
                         id='task'
                         value={this.state.task}
                         onChange={this.handleChange}
                    />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}
