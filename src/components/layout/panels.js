import React from 'react'
import './Panels.css'
import { PropTypesChecker, renderElement } from '../../utils'

 export const LeftPanel = (props) => {
   const { components, changeComponent } = props
   const displayComponents = components.map(component => {
     const spanClass = component.isActive ? 'hl' : ''
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

 export const RightPanel = (props) => {
   return(
       <div className="right-panel">
          <div className="props-header"> PROPS </div>
       </div>
     )
 }
