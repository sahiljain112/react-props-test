import React from 'react'
import { propTypesMapper, valueMapper } from '../../utils'
import _ from 'lodash'


const RightPanel = (props) => {

  const { propConfig, handlePropChange } = props

  const handleChange = (key, event) => {

    console.log('Hello')
    const elementType = propTypesMapper(propConfig[key].type)
    const value = valueMapper(elementType, event)
    key = parseInt(key, 10)
    const config = {...propConfig[key], value}
    handlePropChange(key, config)

  }

  let propsToDisplay = _.map(propConfig, (prop, index) => {
    const elementType = propTypesMapper(prop.type)
       if(elementType === 'inputNumber') {
        return(<input type='number' value={prop.value} onChange={_.partial(handleChange, index)} />)
       }
       else if(elementType === 'inputString') {
        return(<input type='text' value={prop.value} onChange={_.partial(handleChange, index)} />)
       }
       else if(elementType === 'boolean') {
        return( <select value={prop.value} onChange={_.partial(handleChange, index)}>
                  <option value="true">True</option>
                  <option value="False">False</option>
                </select>
            )
       }
       else {
        return(<input type='text' value='Enter value' onChange={_.partial(handleChange, index)} />)
       }
   })

    propsToDisplay = _.map(propsToDisplay, (prop, index) => {
    return (
      <li key={index}>
        { prop }
      </li>
    )
  })

  return (
    <div className="right-panel">
       <div className="props-header"> PROPS </div>
       <ul>
         { propsToDisplay }
       </ul>
    </div>
  )
}

export default RightPanel

// export class RightPanel extends Component {
//
//   constructor(props){
//     super(props)
//     this.state = {
//       stateValues: {}
//     }
//   }
//
//   handleStateChange = (key, eventOrValue) => {
//     const value = valueMapper(elementType, eventOrValue);
//
//   //   console.log('Handle state updates')
//   //   const { stateValues } = this.state
//   //   const { handlePropChange } = this.props
//   //   /*
//   //   * For input type
//   //   */
//   //   const newStateValues = Object.assign({}, stateValues, { id: event.target.value})
//   // //  stateValues[id] = event.target.value
//   //   this.setState({
//   //     stateValues: newStateValues
//   //   }, () => {
//   //     handlePropChange(event)
//   //   })
//   that.props.onChange({[key]: value})
//
//   }
//
//   createPropsDisplay(){
//     this.propsToDisplay = [];
//     const { propConfig } = this.props;
//     const stateBuilder = {};
//
//     /**
//     *
//     { counter: 'number'
//       background: 'string'
//     }
//     {
//     counter: 0,
//     background: 'black',
//   }
//     */
//     Object.keys(propConfig).forEach((key, index) => {
//       const elementType = PropTypesMapper(propConfig[key])
//       if(elementType === 'inputNumber'){
//          stateBuilder[index] = 0
//          this.propsToDisplay.push(<input type='number' id={index} value={stateBuilder[index]} onChange={_.partial(this.handleStateChange, key)} />)
//         }
//         else if(elementType === 'inputString'){
//           stateBuilder[index] = ''
//          this.propsToDisplay.push(<input type='text' id={index} value={stateBuilder[index]} onChange={_.partial(this.handleStateChange, key)} />)
//         }
//         else {
//           stateBuilder[index] = ''
//          this.propsToDisplay.push(<input type='text' id={index} value='Enter value' onChange={_.partial(this.handleStateChange, key)} />)
//         }
//     })
//     this.setState({ stateValues: stateBuilder})
//   }
//
//   componentWillMount() {
//     this.createPropsDisplay()
//   }
//
//   render() {
//
//     const { activeComponentProps } = this.props
//     const stateBuilder = this.state.stateValues
//     const propLabels = []
//     console.log('Has rendered')
//     Object.keys(activeComponentProps).forEach(key => propLabels.push(activeComponentProps[key]))
//     const propsToDisplay = this.propsToDisplay.map((prop, index) => {
//       return (
//         <li key={index}>
//           {propLabels[index]} : {prop}
//         </li>
//       )
//     })
//     return(
//         <div className="right-panel">
//            <div className="props-header"> PROPS </div>
//            <ul>
//             { propsToDisplay }
//            </ul>
//         </div>
//       )
//    }
// }
