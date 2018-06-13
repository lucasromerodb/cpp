import React, { Component } from 'react'
import './InputPrice.css'

export class InputPrice extends Component {

  constructor() {
    super()
    this.state = {
      ready: false,
      input: null
    }
  }

  _handleChange = e => {
    console.log(e.target.value);
    e.target.value.length > 0
    ? this.setState({ ready: true, input: e.target.value })
    : this.setState({ ready: false, input: e.target.value })
    this.props.userInput(e.target.value)
  }

  _handleSubmit = e => {
    e.preventDefault()
    this.props.startConversion()
  }

  render () {
    return (
      <div className="Card Card_white">
        <form
          className={ this.state.ready ? "InputPrice is-ready" : "InputPrice" }
          onSubmit={ this._handleSubmit }
          >
          <label htmlFor="InputPrice" className="InputPrice__label">USD</label>
          <input
            autoFocus
            className="InputPrice__input"
            id="InputPrice"
            placeholder="0.00"
            type="number"
            onChange={this._handleChange}
          />
          <button
            className="InputPrice__button"
            type="button"
            onClick={this._handleSubmit}
          >
            <i className="fas fa-check"></i>
          </button>
        </form>
      </div>
    )
  }
}
