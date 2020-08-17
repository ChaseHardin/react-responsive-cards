import React from 'react'
import Card from 'react-bootstrap/Card'

export default ({ detail }) => {
  const makeAltText = `Picture for ${detail.title}`
  const renderImage = () =>
    detail.image && (
      <Card.Img
        alt={makeAltText}
        variant='top'
        src={detail.image}
        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
      />
    )

  return (
    <Card>
      {renderImage()}
      <Card.Body>
        <Card.Title>{detail.title}</Card.Title>
        <Card.Text>{detail.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}
