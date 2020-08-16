import React from 'react'
import { render } from '@testing-library/react'
import { Cards } from './index'

test('should allow a user to view multiple cards', () => {
  const details = [
    {
      title: 'Card 1',
      description: 'A short description for card 1'
    },
    {
      title: 'Card 2',
      description: 'A short description for card 2'
    }
  ]

  const { getByText } = render(<Cards details={details} />)

  details.forEach((detail) => {
    getByText(detail.title)
    getByText(detail.description)
  })
})
