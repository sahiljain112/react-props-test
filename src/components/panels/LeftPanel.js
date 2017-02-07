import React from 'react'

const LeftPanel = (props) => {
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

export default LeftPanel
