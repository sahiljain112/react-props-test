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
  'funtion': 'textarea',
  'boolean': 'select',
}

export const PropTypesChecker = (propType) => {
  const TYPE_OF_PROP = (propType)
  return matchPropsToElements.TYPE_OF_PROP
}
