import React, { Component } from 'react'
import './InputPrice.css'

export class InputPrice extends Component {
  constructor() {
    super()
  }

  render () {
    return (
      <div className="Card Card_white">
        <form className="InputPrice">
          <label htmlFor="InputPrice" className="InputPrice__label">US$</label>
          <input type="number" placeholder="0.00" className="InputPrice__input" id="InputPrice"/>
          <button className="InputPrice__button"><i className="fas fa-check"></i></button>
        </form>
      </div>
    )
  }
}
