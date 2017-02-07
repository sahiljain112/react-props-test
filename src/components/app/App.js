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

  handleComponentChange(event){
    console.log('Component change clicked')
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
