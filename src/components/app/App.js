import React, { Component } from 'react';
import './App.css';
import { LeftPanel, MainPanel, RightPanel} from '../layout/Panels'
import { getComponentsList } from '../../utils'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeComponent: '',
      activeComponentProps: []
    }
    this.handleChange = this.handleChange.bind(this)
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
        id: index,
        props: component.propTypes,
        isActive: false
      })
    })
    // gets first element of array
    this.components[0].isActive = true
    activeComponent = this.components[0]
    console.log('Active component', activeComponent)
    activeComponentProps = activeComponent.props
    this.setState({
      activeComponent,
      activeComponentProps
    })
  }

  handleChange(event) {
    console.log('Event clicked', event)
  }

  handleComponentChange(event) {
    const components = this.components
    console.log('Component change clicked')
    const { activeComponent, activeComponentProps } = this.state
    const dataset = event.target.parentElement.dataset
    const { id: stringID } = dataset
    const ID = parseInt(stringID, 10)

    const nextComponentIndex = components.findIndex(component => component.id === ID)
    const nextComponentProps = components[nextComponentIndex].props

    if(activeComponent.id !== components[nextComponentIndex].id){

      const prevComponentIndex = components.findIndex(component => component.id === activeComponent.id)
      components[prevComponentIndex].isActive = false
      components[nextComponentIndex].isActive = true

      this.setState({
        activeComponent: components[nextComponentIndex],
        activeComponentProps: nextComponentProps
      })
    }
  }

  render() {
    const { activeComponent, activeComponentProps } = this.state
    const components = this.components || []
    return (
      <div className="container">
        <LeftPanel components = {components} changeComponent={this.handleComponentChange}/>
        <MainPanel activeComponent = {activeComponent} />
        <RightPanel />
      </div>
    )
  }
}

export default App;
