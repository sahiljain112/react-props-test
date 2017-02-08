import React, { Component } from 'react';
import './App.css';
import LeftPanel from '../panels/LeftPanel'
import MainPanel from '../panels/MainPanel'
import RightPanel from '../panels/RightPanel'
import { getComponentsList } from '../../utils'
import _ from 'lodash'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeComponentKey: 0,
      activeComponent: '',
      propConfig: ''
     }
    this.handlePropChange = this.handlePropChange.bind(this)
    this.handleComponentChange = this.handleComponentChange.bind(this)
  }

  componentWillMount() {
    const componentsList = getComponentsList() || []
    console.log(componentsList)
    this.components = []
    componentsList.forEach((component, index) => {
      this.components.push({
        component,
        displayName: component.name,
        key: index,
        id: index,   // Prevent reference passing errors
        // propConfig: [component.propConfig, component.propLabels, component.defaultProps].map(object => Object.assign({}, object)),
        propConfig: _.map(component.propConfig, (prop) => {
          return ({
            name: prop.name,
            type: prop.type,
            label: prop.label,
            value: prop.value
          })
        })
      })
    })
    // gets first element of array
    const activeComponent = {...this.components[0]}
    const propConfig = {...activeComponent.propConfig}
    console.log('Active component', activeComponent)
    // activeComponentProps = activeComponent.propLabels
    this.setState({
      activeComponent,
      propConfig
    })
  }

  handlePropChange(key, config) {

    this.setState({
      propConfig: {...this.state.propConfig, [key]: config}
    })
    // console.log('Inside parent')
    // const { activeComponent } = this.state
    // let newPropConfig = [...activeComponent.propConfig]
    // newPropConfig[2][key] = value
    // const newComponent = Object.assign({}, activeComponent, { propConfig: newPropConfig})
    // this.setState({ activeComponent: newComponent})
  }

  handleComponentChange(event) {
    const components = this.components
    console.log('Component change clicked')
    // const { activeComponent, activeComponentProps } = this.state
    const dataset = event.target.nodeName === 'SPAN' ? event.target.parentElement.dataset : event.target.dataset
    const { id: stringID } = dataset
    const ID = parseInt(stringID, 10)

    const nextComponent = components.find(component => component.id === ID)

      this.setState({
        activeComponentKey: nextComponent.key,
        activeComponent: nextComponent,
        propConfig: {...nextComponent.propConfig}
      })
    }

  render() {
    const { activeComponentKey, activeComponent, propConfig } = this.state
    const components = this.components || []
    // const { propConfig } = activeComponent

    return (
      <div className="container">
        <LeftPanel components = {components} changeComponent={this.handleComponentChange} activeComponentKey={activeComponentKey} />
        <MainPanel activeComponent = {activeComponent} propConfig={propConfig} />
        <RightPanel propConfig = {propConfig} handlePropChange = {this.handlePropChange} />
      </div>
    )
  }
}


export default App;
