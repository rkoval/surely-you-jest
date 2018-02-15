import React, { Component } from 'react'
import logo from './jest.png'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Surely, You Jest!</h1>
          <img src={logo} style={{ width: '80px', height: '80px' }} />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
