import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const ExampleComponent = ({ text }) => {
  return (
    <Container>
      <Row style={{marginTop: '2rem'}}>
        <Col>
          <Alert variant={'info'}>Example Component: {text}</Alert>
        </Col>
      </Row>
    </Container>
  )
}
