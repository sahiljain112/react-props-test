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

export const PropTypesMapper = (propType) => {
  const TYPE_OF_PROP = (propType).toLowerCase()
  return matchPropsToElements[TYPE_OF_PROP]
}
