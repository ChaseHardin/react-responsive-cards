import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export const Cards = (props) => {
  const renderCards = () =>
    props.details.map((detail, index) => (
      <Col
        key={index}
        lg={4}
        md={6}
        style={{ marginBottom: '1rem', marginTop: '2rem' }}
      >
        <Card detail={detail} />
      </Col>
    ))

  return (
    <Container>
      <Row>{renderCards()}</Row>
    </Container>
  )
}
