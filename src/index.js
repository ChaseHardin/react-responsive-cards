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
        xs={12}
        sm={6}
        lg={4}
        xl={3}
        style={{ marginBottom: '1rem', marginTop: '2rem' }}
      >
        <Card detail={detail} />
      </Col>
    ))

  return (
    <Container fluid>
      <Row>{renderCards()}</Row>
    </Container>
  )
}
