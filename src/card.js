import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default ({ detail }) => {
  const makeAltText = `Picture for ${detail.title}`
  const renderImage = () =>
    detail.image && (
      <Card.Img
        alt={makeAltText}
        variant='top'
        src={detail.image}
        style={{ width: '100%', height: '25rem', objectFit: 'cover' }}
      />
    )

  const renderButton = () => {
    return (
      <Button variant={detail.variant} onClick={detail.callbackFn}>
        {detail.buttonText}
      </Button>
    )
  }

  return (
    <Card>
      {renderImage()}
      <Card.Body>
        <Card.Title>{detail.title}</Card.Title>
        <Card.Text style={{ height: '4rem', overflow: 'scroll' }}>
          {detail.description}
        </Card.Text>
        {detail.variant && renderButton()}
      </Card.Body>
    </Card>
  )
}
