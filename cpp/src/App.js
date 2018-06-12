import React, { Component } from 'react'
import { InputPrice } from './components/InputPrice/InputPrice'
import { Card } from './components/Card/Card'
import { DolarPrice } from './components/DolarPrice/DolarPrice'
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      firstPurchase: false,
      bookPurchase: true,
      shippingIncluded: false
    }
  }

  _changeCardState = (stateName) => {
    console.log(stateName, null);
    this.setState(prevState => { stateName: !prevState.stateName })
  }

  render() {
    return (
      <div className="App">
        <InputPrice/>
        <DolarPrice/>
        <Card
          enabled={ this.state.firstPurchase && "is-enabled" }
          icon="hashtag"
          // onClick={ this._changeCardState('firstPurchase') }
          // title={ this.state.firstPurchase ? "Es mi primer compra" : "Ya compré antes" }
          titleTrue="Es mi primer compra"
          titleFalse="Ya compré antes"
        >
          Los libros no pagan impuestos del 50%.
        </Card>
        <Card
          enabled={ this.state.bookPurchase && 'is-enabled' }
          icon="book-open"
          // onClick={ this._changeCardState('bookPurchase') }
          // title={ this.state.bookPurchase ? "Es un libro" : "Es un producto" }
          titleTrue="Es un libro"
          titleFalse="Es un producto"
        >
  				Si es tu primer compra del año, los impuestos del 50% tienen una bonificación de US$ 25 sobre el total de la compra (precio + envío).
        </Card>
        <Card
          enabled={ this.state.shippingIncluded && 'is-enabled' }
          icon="truck"
          // onClick={ this._changeCardState('shippingIncluded') }
          // title={ this.state.shippingIncluded ? "El envío está incluido" : "Tengo que pagar el envío" }
          titleTrue="El envío está incluido"
          titleFalse="Pagaré el envío"
        >
				  El costo del envío forma parte del total de la compra. Es importante para calcular el impuesto del VEP.
        </Card>
      </div>
    );
  }
}

export default App;
