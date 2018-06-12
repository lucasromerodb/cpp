import React, { Component } from 'react'
import './Box.css'

export class Box extends Component {
  constructor() {
    super()
    this.state = { color: 'white' }
  }

  render() {
    return (
      <div className={`Box ${this.props.enabled}`}>
        <div className="Box__header">
          <div className="Box__checkbox">
            {this.props.icon}
          </div>
          <div className="Box__title">
            {this.props.title}
          </div>
        </div>
        <p className="Box__description">
          {this.props.children}
        </p>
      </div>
    )
  }
}
