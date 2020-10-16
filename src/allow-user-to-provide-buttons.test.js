import React from 'react'
import { render } from '@testing-library/react'
import { Cards } from './index'
import chance from './test-utils/chance-util'
import '@testing-library/jest-dom/extend-expect'

test('should allow a user to pass a custom footer component', () => {
  const expectedFooterText = chance.word()

  const details = [
    {
      title: chance.string(),
      description: chance.paragraph(),
      image: chance.url(),
      renderFooter: <div>{expectedFooterText}</div>
    }
  ]

  const { getByText } = render(<Cards details={details} />)

  getByText(expectedFooterText)
})

test('should allow buttons to be optional', () => {
  const details = [
    {
      title: chance.string(),
      description: chance.paragraph(),
      image: chance.url()
    }
  ]

  const { container } = render(<Cards details={details} />)

  expect(container.querySelector('button')).toBeNull()
})
