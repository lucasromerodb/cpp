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
      shippingIncluded: false,
      bookPurchase: false,
      currencyPrice: 0,
      userInputPrice: 0,
      userInputShipping: 0,
      priceConverted: 0
    }
  }

  _setCardStatus = (id) => {
    this.setState(prevState =>({ [id]: !prevState[id] }))
  }

  _getCurrency = (price) => {
    this.setState({ currencyPrice: price })
  }

  _userInputPrice = (input) => {
    this.setState({ userInputPrice: input })
  }

  _startConversion = () => {
    console.log('Convirtiendo...')

    const taxQty = 50 // porcentaje de impuesto
    const foreignCurrency = this.state.currencyPrice // obtengo el precio obtenido por axios

    const product = Number(this.state.userInputPrice) // precio del producto
    const shipping = Number(this.state.userInputShipping) // costo del envío
    const franchise = this.state.firstPurchase === true ? 25 : 0 // franquicia anual que otorga la AFIP
    const courier = ( this.state.bookPurchase || product === 0 ) ? 0 : 120 // envío por Correo Argentino

    const price = product + shipping // el total de la compra es la suma del precio del producto y el envío
    const priceDiscounted = ( ( price - franchise ) < 0) ? 0 : price - franchise // descuento un valor si realmente hay franquicia

    const tax = this.state.bookPurchase ? 0 : priceDiscounted * ( taxQty / 100 ) // tipo de producto (si es un libro no lleva inpuestos)

    const converted = ( price + tax ) * foreignCurrency + courier // conversión final

    this.setState({ priceConverted: converted })
  }

  componentDidMount() {
    document.getElementById('firstPurchase').click()
    document.getElementById('shippingIncluded').click()
  }

  render() {
    return (
      <div className="App">
        <InputPrice
          startConversion={this._startConversion}
          userInput={this._userInputPrice}
        />
        <DolarPrice getCurrency={this._getCurrency}/>
        <Results priceConverted={this.state.priceConverted.toFixed(2)}/>
        <Card
          enabled={ this.state.firstPurchase && "is-enabled" }
          idCard="firstPurchase"
          icon="hashtag"
          status={ this._setCardStatus }
          titleTrue="Es mi primer compra"
          titleFalse="Ya compré antes"
        >
          Los libros no pagan impuestos del 50%.
        </Card>
        <Card
          enabled={ this.state.shippingIncluded && 'is-enabled' }
          idCard="shippingIncluded"
          icon="truck"
          status={ this._setCardStatus }
          titleTrue="Envío incluido"
          titleFalse="Pagaré el envío"
        >
				  El costo del envío forma parte del total de la compra. Es importante para calcular el impuesto del VEP.
        </Card>
        <Card
          enabled={ this.state.bookPurchase && 'is-enabled' }
          idCard="bookPurchase"
          icon="book-open"
          status={ this._setCardStatus }
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

// function calculateConversion() {
//
//   // const dollar = dollarConverted, // obtenido de openexchangerates.org
//
//   const taxQty = 50, // porcentaje
//   const currency = this.state.currencyPrice // obtenido de openexchangerates.org
//
//   const product = Number(this.state.price) // precio del producto
//   const shipping = Number(this.state.shipping) // costo del envío
//   const franchise = this.state.firstPurchase ? 25 : 0 // franquicia anual que otorga la AFIP
//   const courier = (this.state.bookPurchase || product === 0) ? 0 : 120 // envío por Correo Argentino
//
//   const price = product + shipping
//   const priceDiscounted = ( ( price - franchise ) < 0) ? 0 : price - franchise
//
//   const tax = this.state.bookPurchase ? 0 : priceDiscounted * ( taxQty / 100 ) // tipo de producto (si es un libro no lleva inpuestos)
//
//   const ars = ( price + tax ) * currency + courier
//
//   // ----------
//
//   const dollarized = ( ars / currency )
//   const inflation = dollarized * 100 / price - 100
// }
