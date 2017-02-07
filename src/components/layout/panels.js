import React, { Component } from 'react'
import './Panels.css'
import { PropTypesMapper } from '../../utils'

 export const LeftPanel = (props) => {
   const { components, changeComponent, activeComponentKey } = props
   const displayComponents = components.map(component => {
     const spanClass = component.id === activeComponentKey ? 'hl' : ''
     return (
       <li key={component.id} onClick={changeComponent} data-id={component.id}>
         <span className={spanClass}> {component.displayName} </span>
       </li>
     )
   })
   return (
     <div className="left-panel">
      <div className="components-header">
        COMPONENTS
      </div>
         <ul>
           { displayComponents }
         </ul>
     </div>
   )
 }

 export const MainPanel = (props) => {
   let Component = <h3> Fetching components for you</h3>
   if(props.activeComponent)
      Component = < props.activeComponent.component />
   return(
       <div className="main-panel">
         { Component }
       </div>
     )
 }

export class RightPanel extends Component {

  constructor(props){
    super(props)
    this.state = {
      stateValues: {}
    }
  }

  componentWillMount() {

    this.propsToDisplay = []
    const { propConfig } = this.props
    const stateValue = {}

    Object.keys(propConfig).forEach(key => {
      const elementType = PropTypesMapper(propConfig[key])
      if(elementType === 'inputNumber')
          this.propsToDisplay.push(<input type='number' value='Enter number' />)
      else if(elementType === 'inputString')
          this.propsToDisplay.push(<input type='text' value='Enter String' />)
      else
        return ''
    })
  }

  handleStateChange() {

  }

  render() {
    const { activeComponentProps } = this.props
    const propsToDisplay = this.propsToDisplay.map((prop, index) => {
      return (
        <li>
          {activeComponentProps[index]} : {prop}
        </li>
      )
    })
    return(
        <div className="right-panel">
           <div className="props-header"> PROPS </div>
           <ul>
            { propsToDisplay}
           </ul>
        </div>
      )

  //  const { activeComponentProps } = this.props
  //  const inputTypes = activeComponentProps.forEach(prop => {
  //    const elementType = PropTypesMapper(prop)
  //    if(elementType === 'inputNumber')
  //     return (<input type='number' value='Enter number' />)
  //    else if(elementType === 'inputString')
  //      return (<input type='text' value='Enter String' />)
  //    else
  //     return
  //  })


   }
}
