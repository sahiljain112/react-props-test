import React from 'react'
import { PropTypesChecker, renderElement } from '../../utils'

 export const LeftPanel = (props) => {
   const { components, changeComponent } = props
   const displayComponents = components.map(component => {
     return (
       <li key={component.id}>
          <a onClick={changeComponent} data-id={component.id}> {component.displayName} </a>
       </li>
     )
   })
   return (
     <ul>
       { displayComponents }
     </ul>
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
  //
 }
