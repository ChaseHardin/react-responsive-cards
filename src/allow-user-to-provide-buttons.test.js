import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Cards } from './index'
import chance from './test-utils/chance-util'

test('should allow a user to tie callback functions to button click events', () => {
  const stubbedCallback = jest.fn()

  const details = [
    {
      title: chance.string(),
      description: chance.paragraph(),
      image: chance.url(),
      callbackFn: stubbedCallback,
      buttonText: chance.string(),
      variant: chance.pickone([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark'
      ])
    }
  ]

  const { getByText, container } = render(<Cards details={details} />)

  expect(stubbedCallback.mock.calls.length).toBe(0)

  fireEvent.click(getByText(details[0].buttonText))

  expect(stubbedCallback.mock.calls.length).toBe(1)
  expect(container.querySelector(`.btn-${details[0].variant}`)).toBeTruthy()
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
