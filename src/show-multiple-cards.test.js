import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Cards } from '../src/index'
import chance from '../src/test-utils/chance-util'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

test('should allow a user to view multiple cards', () => {
  const details = [
    {
      title: chance.word(),
      description: chance.paragraph(),
      image: chance.url()
    },
    {
      title: chance.word(),
      description: chance.paragraph(),
      image: chance.url()
    }
  ]

  const { getByText, container } = render(<Cards details={details} />)

  details.forEach((detail) => {
    const cardMedia = container.querySelector(
      `[data-card-media="${detail.title}"]`
    )
    getByText(detail.title)
    getByText(detail.description)
    expect(cardMedia).toHaveAttribute(
      'style',
      `background-image: url(${detail.image});`
    )
    expect(cardMedia).toHaveAttribute('title', detail.title)
  })
})

test('should allow a user to provide no images', () => {
  const details = [
    {
      title: chance.word(),
      description: chance.paragraph()
    }
  ]

  const { container } = render(<Cards details={details} />)

  const cardMedia = container.querySelector(
    `[data-card-media="${details[0].title}"]`
  )
  expect(cardMedia).toHaveAttribute(
    'style',
    `background-image: url(${'https://via.placeholder.com/500x500.png?text=react-responsive-cards'});`
  )
})

test('renders cards with correct material-ui styles', () => {
  const details = [
    {
      title: 'The Card Title',
      description: 'This is a short description',
      image: 'https://<image_here>.jpg'
    }
  ]

  const tree = renderer.create(<Cards details={details} />).toJSON()

  expect(tree).toMatchSnapshot()
})

test('allows user to connect event to card', () => {
  const stubbedOnClick = jest.fn()

  const details = [
    {
      title: chance.word(),
      description: chance.paragraph(),
      image: chance.url(),
      handleOnClick: stubbedOnClick
    }
  ]

  const { getByText } = render(<Cards details={details} />)

  fireEvent.click(getByText(details[0].title))

  expect(stubbedOnClick).toHaveBeenCalledTimes(1)
})
