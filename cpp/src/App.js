import React, { Component } from 'react'
import { InputPrice } from './components/InputPrice/InputPrice'
import { Card } from './components/Card/Card'
import { DolarPrice } from './components/DolarPrice/DolarPrice'
import { Results } from './components/Results/Results'
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      firstPurchase: false,
      bookPurchase: false,
      shippingIncluded: false
    }
  }

  componentDidMount() {
    document.getElementById('firstPurchase').click()
    document.getElementById('shippingIncluded').click()
  }

  render() {
    return (
      <div className="App">
        <InputPrice/>
        <DolarPrice/>
        <Results/>
        <Card
          enabled={ this.state.firstPurchase && "is-enabled" }
          idCard="firstPurchase"
          icon="hashtag"
          status={ this.state.firstPurchase }
          titleTrue="Es mi primer compra"
          titleFalse="Ya compré antes"
        >
          Los libros no pagan impuestos del 50%.
        </Card>
        <Card
          enabled={ this.state.shippingIncluded && 'is-enabled' }
          idCard="shippingIncluded"
          icon="truck"
          status={ this.state.bookPurchase }
          titleTrue="Envío incluido"
          titleFalse="Pagaré el envío"
        >
				  El costo del envío forma parte del total de la compra. Es importante para calcular el impuesto del VEP.
        </Card>
        <Card
          enabled={ this.state.bookPurchase && 'is-enabled' }
          idCard="bookPurchase"
          icon="book-open"
          status={ this.state.bookPurchase }
          titleTrue="Es un libro"
          titleFalse="Es un producto"
        >
  				Si es tu primer compra del año, los impuestos del 50% tienen una bonificación de US$ 25 sobre el total de la compra (precio + envío).
        </Card>
      </div>
    );
  }
}

export default App;
