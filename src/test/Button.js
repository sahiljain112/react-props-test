import React from 'react'

const styles = {
  button: {
    backgrounColor: '#0a468f',
    color: 'white',
    border: '2px solid white'
  },

  container: {
    display: 'flex',
    justifyContent: 'center'
  }
}

 const Counter = (props) => {
  return(
    <div style={styles.container}>
      <button type="button" style={styles.button} onClick={props.handleButtonClick}> {props.counter} </button>
    </div>
  )
}


Counter.propTypes = {
  handleButtonClick: React.PropTypes.func.isRequired,
  counter: React.PropTypes.number
}

Counter.defaultProps = {
  counter: 0
}

export default Counter
