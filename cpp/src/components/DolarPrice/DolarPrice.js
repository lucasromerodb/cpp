import React, { Component } from 'react'
import axios from 'axios'
import './DolarPrice.css'

const appId = '8f20c082fbbd475a84792e488cd902b2'
const url = `https://openexchangerates.org/api/latest.json?app_id=${appId}`

export class DolarPrice extends Component {
  constructor(props) {
    super(props)
    this.state = { dolar: 0 }
  }

  _getCurrency() {
    axios
      .get(url)
      .then(currency => {
        this.setState({ dolar: currency.data.rates.ARS })
      })
  }

  componentDidMount() {
    this._getCurrency();
  }

  render () {
    return (
      <div className="DolarPrice">
        <i>USD</i> 1 = <i>ARS</i> {this.state.dolar.toFixed(2)}
      </div>
    )
  }
}
