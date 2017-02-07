import React from 'react'

const MainPanel = (props) => {
  let Component = <h3> Fetching components for you</h3>
  if(props.activeComponent)
     Component = < props.activeComponent.component />
  return(
      <div className="main-panel">
        { Component }
      </div>
    )
}

export default MainPanel
