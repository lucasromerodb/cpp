import React, { Component } from 'react';
import { Box } from './components/Box/Box';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Box
          icon="A"
          title="Compra regular"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eos, ipsa, neque quia dolores deserunt, ullam doloremque assumenda quidem harum repudiandae ut aliquam laborum, corporis est pariatur enim porro eveniet.
        </Box>
        <Box
          icon="A"
          title="Compra regular"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eos, ipsa, neque quia dolores deserunt, ullam doloremque assumenda quidem harum repudiandae ut aliquam laborum, corporis est pariatur enim porro eveniet.
        </Box>
        <Box
          icon="A"
          title="Compra regular"
          enabled="is-enabled"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eos, ipsa, neque quia dolores deserunt, ullam doloremque assumenda quidem harum repudiandae ut aliquam laborum, corporis est pariatur enim porro eveniet.
        </Box>
      </div>
    );
  }
}

export default App;
