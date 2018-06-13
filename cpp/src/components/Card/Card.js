import React, { Component } from 'react'
import './Card.css'

export class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  _handleActive = () => {
    this.props.updatePrice()
    this.props.setCardStatus(this.props.idCard)
    this.setState(prevState => ({ active: !prevState.active }))
  }

  render() {
    return (
      <div className={ this.state.active ? "Card Card_white is-enabled" : "Card Card_white" }>
        <div
          className="Card__header"
          id={this.props.idCard}
          onClick={this._handleActive}
        >
          <div className="Card__checkbox">
            <i className={`fas fa-${this.props.icon}`}></i>
          </div>
          <div className="Card__title">
            {this.state.active ? this.props.titleTrue : this.props.titleFalse}
          </div>
        </div>
        <div className="Card__description">
          {this.props.children}
        </div>
      </div>
    )
  }
}
