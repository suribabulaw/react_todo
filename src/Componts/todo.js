import React, { Component } from 'react'

export default class todo extends Component {
    state = { isEditing  : false , task : this.props.task}

 hadleRemove= () => {
   this.props.remomeTodo(this.props.id)
 }
 handleTogle =() => {
   this.setState({ isEditing : !this.state.isEditing })
 }
 handleUpdate = (e) => {
   e.preventDefault();
   this.props.updateTods(this.props.id , this.state.task)

   this.setState({isEditing :false})
 
 }
 updateChage =(e) => {
   this.setState({ task : e.target.value})
 }
  render() { 
        let result ;
      if (this.state.isEditing){
        result = <div>
          <form onSubmit={this.handleUpdate}>
            <input  type ='text' value ={this.state.task} name='task' onChange={this.updateChage}/>
            <button>save</button>
          </form>
        </div> 
       }else{
         result =  <div>
         <button onClick = { this.handleTogle}>edit</button>
         <button onClick={this.hadleRemove}>X</button>  
         <li>{this.props.task}</li>
       </div>
       }
       return result;
  }
}
