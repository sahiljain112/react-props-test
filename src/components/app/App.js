import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LeftPanel, MainPanel, RightPanel} from './layout'

class App extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log('Event clicked', event)
  }

  render() {
    return (
      <div className="container">
        <LeftPanel components = {components} />
        <MainPanel component = {activeComponent} />
        <RightPanel props = {activeComponentProps} onChange={this.handleChange} />
      </div>
    )
  }
}

export default App;
