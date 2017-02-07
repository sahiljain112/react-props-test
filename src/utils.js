import Button from './test/Button'

export const getComponentsList = () => {
  return [
    Button,
    Button,
    Button
  ]
}

//
// const mapComponentToProps = {
//   BUTTON : COMPONENT_PROPS.BUTTON
// }

const matchPropsToElements = {
  'string' : 'inputString',
  'number' : 'inputNumber',
  'function': 'textarea',
  'boolean': 'select',
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
    case 'function':
      return event.target.value
      break;
    case 'boolean':
      return event.target.value
      break;
    default:

  }
}
