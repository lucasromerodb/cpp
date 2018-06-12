import React, { Component } from 'react'
import './InputPrice.css'

export class InputPrice extends Component {

  constructor() {
    super()
    this.state = {
      ready: false
    }
  }

  _handleChange = (e) => {
    console.log(e.target.value);
    e.target.value.length > 0
    ? this.setState({ ready: true })
    : this.setState({ ready: false })
  }

  render () {
    return (
      <div className="Card Card_white">
        <form className={ this.state.ready ? "InputPrice is-ready" : "InputPrice" }>
          <label htmlFor="InputPrice" className="InputPrice__label">USD</label>
          <input
            autoFocus
            className="InputPrice__input"
            id="InputPrice"
            placeholder="0.00"
            type="number"
            onChange={this._handleChange}
          />
          <button type="button" className="InputPrice__button"><i className="fas fa-check"></i></button>
        </form>
      </div>
    )
  }
}
