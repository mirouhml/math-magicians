/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */

import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
