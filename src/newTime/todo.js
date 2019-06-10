import React, { Component } from 'react'

export default class todo extends Component {
    state ={isEditfrm :false , task:this.props.task }
    remove=()=>{
        this.props.removetodos(this.props.id)
    }
    ClickTrngle=()=>{
        this.setState({isEditfrm : !this.state.isEditfrm})
    }
    changeHandler=(e)=>{
        this.setState({ task : e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.update(this.props.id , this.state.task)
        this.setState({isEditfrm :false})
        
    }

    render() {
        if(this.state.isEditfrm){
            return <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    name ='name'
                     onChange={this.changeHandler}
                     value = {this.state.task}
                     />
                    <button>suri</button>
                </form>
            </div>
        }else {
            return <div>
            <button onClick={this.ClickTrngle}>edit</button>
            <button onClick={this.remove}> X</button>
            <li> {this.props.task}</li> 
           </div>
        }
    }
}
