import React, { Component } from 'react';
import { InputPrice } from './components/InputPrice/InputPrice';
import { Card } from './components/Card/Card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputPrice/>
        {/* <Card
          icon="hashtag"
          title="Compra regular"
        >
          Los libros no pagan impuestos del 50%.
        </Card>
        <Card
          icon="book-open"
          title="Compra regular"
        >
  				Si es tu primer compra del año, los impuestos del 50% tienen una bonificación de US$ 25 sobre el total de la compra (precio + envío).
        </Card>
        <Card
          icon="truck"
          title="Compra regular"
          enabled="is-enabled"
        >
				  El costo del envío forma parte del total de la compra. Es importante para calcular el impuesto del VEP.
        </Card> */}
      </div>
    );
  }
}

export default App;
