
import React, { Component } from 'react'

export default class ClsCardProps extends Component {
  render() {
    return (
      <div className='card'>
        <h4>{this.props.title}</h4>
        <p>{this.props.des}</p>
       </div>
    )
  }
}
