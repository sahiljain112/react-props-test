import React from 'react'

const MainPanel = (props) => {
  let Component = <h3> Fetching components for you</h3>
  if(props.activeComponent) {
      const { propConfig, activeComponent } = props
      const propValues  = Object.assign({}, propConfig[2])
      const propValueArray = [ propValues ]

     Component = < activeComponent.component {...propValues}/>
  }
  return(
      <div className="main-panel">
        { Component }
      </div>
    )
}

export default MainPanel
