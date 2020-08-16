import React from 'react'
import Card from 'react-bootstrap/Card'

export default ({ detail }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{detail.title}</Card.Title>
        <Card.Text>{detail.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}
