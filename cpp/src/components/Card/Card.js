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
    this.setState(prevState => ({ active: !prevState.active }))
  }

  componentDidUpdate() {
    console.log(this.props.titleTrue, this.state.active);
  }

  render() {
    return (
      <div className={ this.state.active ? "Card Card_white is-enabled" : "Card Card_white" }>
        <div className="Card__header" onClick={this._handleActive} >
          <div className="Card__checkbox">
            <i className={`fas fa-${this.props.icon}`}></i>
          </div>
          <div className="Card__title">
            {this.state.active ? this.props.titleTrue : this.props.titleFalse}
          </div>
        </div>
        <p className="Card__description">
          {this.props.children}
        </p>
      </div>
    )
  }
}
