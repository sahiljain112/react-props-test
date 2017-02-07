import React, { Component } from 'react';
import './App.css';
import LeftPanel from '../panels/LeftPanel'
import MainPanel from '../panels/MainPanel'
import RightPanel from '../panels/RightPanel'
import { getComponentsList } from '../../utils'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeComponentKey: 0,
      activeComponent: ''
     }
    this.handlePropChange = this.handlePropChange.bind(this)
    this.handleComponentChange = this.handleComponentChange.bind(this)
  }

  componentWillMount() {
    const componentsList = getComponentsList() || []
    console.log(componentsList)
    let  activeComponent , activeComponentProps;
    this.components = []
    componentsList.forEach((component, index) => {
      this.components.push({
        component,
        displayName: component.name,
        key: index,
        id: index,   // Prevent reference passing errors
        propConfig: [ component.propConfig, component.propLabels, component.defaultProps ]
      })
    })
    // gets first element of array
    activeComponent = this.components[0]
    console.log('Active component', activeComponent)
    // activeComponentProps = activeComponent.propLabels
    this.setState({
      activeComponent
    })
  }

  handlePropChange(key, eventOrValue) {
    console.log('Inside parent')
  }

  handleComponentChange(event) {
    const components = this.components
    console.log('Component change clicked')
    // const { activeComponent, activeComponentProps } = this.state
    const dataset = event.target.nodeName === 'SPAN' ? event.target.parentElement.dataset : event.target.dataset
    const { id: stringID } = dataset
    const ID = parseInt(stringID, 10)

    const nextComponent = components.find(component => component.id === ID)
    // const nextComponentProps = nextComponent.propLabels

    // const nextComponentIndex = components.findIndex(component => component.id === ID)
    // const nextComponentProps = components[nextComponentIndex].props
    //
    // if(activeComponent.id !== components[nextComponentIndex].id){
    //
    //   const prevComponentIndex = components.findIndex(component => component.id === activeComponent.id)
    //   components[prevComponentIndex].isActive = false
    //   components[nextComponentIndex].isActive = true

      this.setState({
        activeComponentKey: nextComponent.key,
        activeComponent: nextComponent,
      })
    }

  render() {
    const { activeComponentKey, activeComponent } = this.state
    const components = this.components || []
    const { propConfig } = activeComponent

    return (
      <div className="container">
        <LeftPanel components = {components} changeComponent={this.handleComponentChange} activeComponentKey={activeComponentKey} />
        <MainPanel activeComponent = {activeComponent} activeComponentProps={this.state.formIdValueMap} />
        <RightPanel propConfig = {propConfig} handlePropChange = {this.handlePropChange} />
      </div>
    )
  }
}

export default App;
