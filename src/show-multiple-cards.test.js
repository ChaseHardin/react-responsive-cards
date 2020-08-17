import React from 'react'
import { render } from '@testing-library/react'
import { Cards } from './index'
import chance from './test-utils/chance-util'

test('should allow a user to view multiple cards', () => {
  const details = [
    {
      title: chance.string(),
      description: chance.paragraph(),
      image: chance.url()
    },
    {
      title: chance.string(),
      description: chance.paragraph(),
      image: chance.url()
    }
  ]

  const { getByText, getByAltText } = render(<Cards details={details} />)

  details.forEach((detail) => {
    getByText(detail.title)
    getByText(detail.description)
    getByAltText(`Picture for ${detail.title}`)
  })
})

test('should allow a user to provide no images', () => {
  const details = [
    {
      title: chance.string(),
      description: chance.paragraph()
    }
  ]

  const { queryByAltText } = render(<Cards details={details} />)

  expect(queryByAltText(`Picture for ${details[0].title}`)).toBeNull()
})
