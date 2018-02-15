import React from 'react'
import App from './App'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const component = renderer.create(<App />)
  expect(component.toJSON()).toMatchSnapshot()
})
