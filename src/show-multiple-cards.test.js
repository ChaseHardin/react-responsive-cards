import React from 'react'
import { render } from '@testing-library/react'
import { Cards } from '../src/index'
import chance from '../src/test-utils/chance-util'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer';

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

  const { getByText, getByAltText, container } = render(
    <Cards details={details} />
  )

  details.forEach((detail) => {
    getByText(detail.title)
    getByText(detail.description)
    getByAltText(`Picture for ${detail.title}`)
    expect(getByAltText(`Picture for ${detail.title}`))
      .toHaveAttribute(
        'src',
        detail.image
      )
    expect(getByAltText(`Picture for ${details[0].title}`))
      .toHaveAttribute(
        'style',
        'width: 100%; height: 20rem; object-fit: cover;'
      )
    expect(container.querySelector(`[data-card="${details[0].title}"]`))
      .toHaveAttribute(
        'style',
        'box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'
      )

    expect(container.querySelector(`[data-card-text="${details[0].title}"]`))
      .toHaveAttribute(
        'style',
        'height: 8rem; overflow: scroll;'
      )
  })
})

test('should allow a user to provide no images', () => {
  const details = [
    {
      title: chance.string(),
      description: chance.paragraph()
    }
  ]

  const { getByAltText } = render(<Cards details={details} />)

  expect(getByAltText(`Picture for ${details[0].title}`)).toHaveAttribute(
    'src',
    'https://via.placeholder.com/500x500.png?text=react-responsive-cards'
  )
})

it('renders cards with correct bootstrap styles', () => {
  const details = [{
    title: 'The Card Title',
    description: 'This is a short description',
    image: 'https://<image_here>.jpg',
    variant: 'dark',
    buttonText: 'Details',
    callbackFn: () => {}
  }]

  const tree = renderer
    .create(<Cards details={details}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
