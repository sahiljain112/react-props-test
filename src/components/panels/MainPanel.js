import React from 'react'
import _ from 'lodash'

const MainPanel = (props) => {
  let Component = <h3> Fetching components for you</h3>
  if(props.activeComponent) {
      const { propConfig, activeComponent } = props
      // const propValues  = Object.assign({}, propConfig[2])
      // const propValueArray = [ propValues ]
      // const propValues = _.map(propConfig, (prop) => {
      //   const propName = prop['name']
      //   const propValue = prop['value']
      //   return { propName: propValue }
      // })
      const propValues = {}
      _.forEach(propConfig, (prop) => {
        const propName = prop['name']
        const propValue = prop['value']
        propValues[propName] = propValue
      })

     Component = < activeComponent.component {...propValues} />
  }
  return(
      <div className="main-panel">
        { Component }
      </div>
    )
}

export default MainPanel
