import React, { Component } from 'react'
import logo from './jest.png'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
  }
  addItem() {
    const items = this.state.items
    this.setState({
      items: items.concat([`item ${this.state.items.length}`]),
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Surely, You Jest!</h1>
          <img src={logo} style={{ width: '80px', height: '80px' }} />
        </header>
        <p className="App-intro">
          A VERY SERIOUS TALK ON AUTOMATED TESTING (using Facebook&apos;s Jest)
        </p>
        <button
          className="add-item"
          style={{ fontSize: '20px' }}
          onClick={() => this.addItem()}
        >
          Add Item
        </button>
        {this.state.items.map(item => <div key={item}>{item}</div>)}
      </div>
    )
  }
}

export default App
