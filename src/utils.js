import Button from './test/Button'
import _ from 'lodash'

const componentsList = []

export const getComponentsList = (props) => {
  return [
    Button,
    Button,
    Button
  ]
}

export const getComponentsFromUser = (props) => {
  _.map(props, (value, key) => componentsList.push(value))
}

const matchPropsToElements = {
  'string' : 'inputString',
  'number' : 'inputNumber',
  'boolean': 'checkbox',
  'array': 'select'
}

export const propTypesMapper = (propType) => {
  const TYPE_OF_PROP = (propType)
  return matchPropsToElements[TYPE_OF_PROP]
}

export const valueMapper = (elementType, event) => {
  switch (elementType) {
    case 'inputString':
      return event.target.value
      break;
    case 'inputNumber':
      return event.target.value
      break;
    case 'boolean':
      return event.target.value
      break;
    default:
      return 'Type not supported'
  }
}
