import React, { Component } from 'react'


export default class todo extends Component {
    render() {
        return (
            <div>
               <li>{this.props.task}</li>
            </div>
        )
    }
}
