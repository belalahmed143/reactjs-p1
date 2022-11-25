import React, { Component } from 'react'

export default class CslDestructuringProps extends Component {
  render() {
    const {title,des}=this.props;
    return (
      <div className='card'>
        <h4>{title}</h4>
        <p>{des}</p>
      </div>
    )
  }
}
