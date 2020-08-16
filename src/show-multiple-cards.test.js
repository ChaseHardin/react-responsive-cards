import React from 'react'
import { render } from '@testing-library/react'
import { Cards } from './index'
import chance from './test-utils/chance-util'

test('should allow a user to view multiple cards', () => {
  const details = [
    {
      title: chance.string(),
      description: chance.paragraph()
    },
    {
      title: chance.string(),
      description: chance.paragraph()
    }
  ]

  const { getByText } = render(<Cards details={details} />)

  details.forEach((detail) => {
    getByText(detail.title)
    getByText(detail.description)
  })
})
