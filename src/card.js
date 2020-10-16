import React from 'react'
import Card from 'react-bootstrap/Card'

export default ({ detail }) => {
  const renderImage = () => (
    <Card.Img
      alt={`Picture for ${detail.title}`}
      src={
        detail.image ||
        'https://via.placeholder.com/500x500.png?text=react-responsive-cards'
      }
      style={{ width: '100%', height: '20rem', objectFit: 'cover' }}
    />
  )

  return (
    <Card
      data-card={detail.title}
      style={{
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      }}
    >
      {renderImage()}
      <Card.Body>
        <Card.Title>{detail.title}</Card.Title>
        <Card.Text
          data-card-text={detail.title}
          style={{ height: '8rem', overflow: 'scroll' }}
        >
          {detail.description}
        </Card.Text>
        {detail.renderFooter}
      </Card.Body>
    </Card>
  )
}
