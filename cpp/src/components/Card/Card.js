import React, { Component } from 'react'
import './Card.css'

export class Card extends Component {
  constructor() {
    super()
    this.state = { color: 'white' }
  }

  render() {
    return (
      <div className={`Card Card_white ${this.props.enabled}`}>
        <div className="Card__header">
          <div className="Card__checkbox">
            <i className={`fas fa-${this.props.icon}`}></i>
          </div>
          <div className="Card__title">
            {this.props.title}
          </div>
        </div>
        <p className="Card__description">
          {this.props.children}
        </p>
      </div>
    )
  }
}
