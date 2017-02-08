import React from 'react'

 const Counter = (props) => {
   const styles = {
     button: {
       backgroundColor: props.background,
       color: 'white',
       border: '2px solid white'
     },

     container: {
       display: 'flex',
       justifyContent: 'center'
     }
   }
  return(
    <div style={styles.container}>
      <button type="button" style={styles.button} onClick={props.handleButtonClick}> {props.counter} </button>
    </div>
  )
}

Counter.propTypes = {
  handleButtonClick: React.PropTypes.func,
  counter: React.PropTypes.number,
  background: React.PropTypes.string
}

Counter.propConfig = {
  prop1: {
    name: 'counter',
    type: 'number',
    label: 'Counter',
    value: 0
  },

  prop2: {
    name: 'background',
    type: 'string',
    label: 'Background color',
    value: '#000'
  }
}
// Counter.defaultProps = {
//   handleButtonClick: () => console.log('Button clicked. Defined in default props'),
//   counter: 0,
//   background: '#000'
// }
//
// Counter.propConfig = {
//   handleButtonClick: 'function',
//   counter: 'number',
//   background: 'string'
// }
//
// Counter.propLabels = {
//   // handleButtonClick: 'Click Handler',
//   counter: 'Counter Value',
//   background: 'Background Color'
// }

export default Counter
