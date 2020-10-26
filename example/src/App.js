import React from 'react'

import { Cards } from 'react-responsive-cards'
import 'react-responsive-cards/dist/index.css'
import Chance from 'chance'
import Button from 'react-bootstrap/Button'
const chance = new Chance()

const renderFooter = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Button onClick={() => alert('First footer event triggered!')} variant={'dark'} style={{ marginRight: '6px' }}>Button One</Button>
      <Button onClick={() => alert('Second footer event triggered!')} variant={'info'}>Button Two</Button>
    </div>
  )
}

const generateCardDetails = chance.n(() => {
  const title = chance.name();

  return {
    title,
    description: chance.paragraph(),
    image: `https://picsum.photos/500/500?images=${chance.natural({ min: 1, max: 100 })}`,
    renderFooter: renderFooter()
  }
}, 25)

export default () => <Cards details={generateCardDetails} />
