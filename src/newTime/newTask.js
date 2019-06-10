import React, { Component } from 'react'
import uuid from 'uuid'

export default class newTask extends Component {
    state = {task : ''}
    submitHandle =(e) =>{
        e.preventDefault();
        this.setState({task : ''})
        this.props.newToday({...this.state ,id: uuid()})
    }
    changaHandle =(e) =>{
        this.setState({task : e.target.value})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandle}>
                    <input 
                      name ='name'
                      value={this.state.task}
                      onChange={this.changaHandle}
                     />
                  <button>submit</button>
                </form>
            </div>
        )
    }
}
