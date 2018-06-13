import React, { Component } from 'react'
import './Results.css'

export class Results extends Component {
  render() {
    return (
      <div className="Results Card Card_green">
        <span className="Results__title">Te costará un 100.56% más caro</span>
        <h1 className="Results__converted">ARS {this.props.priceConverted}</h1>
      </div>
    )
  }
}
