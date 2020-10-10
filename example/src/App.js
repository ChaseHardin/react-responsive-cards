import React from 'react'

import { Cards } from 'react-responsive-cards'
import 'react-responsive-cards/dist/index.css'
import Chance from 'chance'
const chance = new Chance()

const generateCardDetails = chance.n(() => {
  const title = chance.name();

  return {
    title,
    description: chance.paragraph(),
    image: `https://picsum.photos/500/500?images=${chance.natural({ min: 1, max: 100 })}`,
    variant: chance.pickone([
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'dark'
    ]),
    buttonText: 'Details',
    callbackFn: () => alert(`Event triggered for: ${title}`)
  }
}, 100)

export default () => <Cards details={generateCardDetails} />
