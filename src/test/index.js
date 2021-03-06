import React from 'react'
import Button from './Button'

export default class Test extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick(event) {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render(){
    const { counter } = this.state
    return(
      <Button counter = {counter} background='#0a468f' handleButtonClick = {this.handleButtonClick} />
      <Button counter = {counter} background='#000' handleButtonClick = {this.handleButtonClick} />
    )
  }
}
