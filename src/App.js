import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MoneyButton from '@moneybutton/react-money-button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Money Button</h1>
        </header>
        <p className="App-intro">
          Give it a try
        </p>
        <MoneyButton
          to='bitcoincash:qrj6duh04ktt3x3m75khp5jv58zk3rh6mc3tpx0qcv'
          amount='0.01'
          currency='USD'
        />
        <MoneyButton
          outputs={[
            {to: 'bitcoincash:qrtrywffg3sac07thpsd9akj54sjl6henczuxer6v4', amount: '0.02', currency: 'USD'},
            {to: 'bitcoincash:qrj6duh04ktt3x3m75khp5jv58zk3rh6mc3tpx0qcv', amount: '0.03', currency: 'USD'},
          ]}
        />
        <MoneyButton
          to='bitcoincash:qrj6duh04ktt3x3m75khp5jv58zk3rh6mc3tpx0qcv'
          amount='0.01'
          currency='USD'
          label='OP_RETURN'
          opReturn='Hello Money Button'
          opReturnData='Hello Money Button'
          onPayment={(payment) => {
            console.log(payment)
          }}
        />
        <MoneyButton
          to='bitcoincash:qrj6duh04ktt3x3m75khp5jv58zk3rh6mc3tpx0qcv'
          amount='0.01'
          currency='USD'
          label='Pay Me'
          onPayment={(payment) => {
            console.log(payment)
          }}
        />
      </div>
    );
  }
}

export default App;
