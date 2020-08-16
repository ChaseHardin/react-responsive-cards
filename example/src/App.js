import React from 'react'

import { Cards } from 'react-responsive-cards'
import 'react-responsive-cards/dist/index.css'

const App = () => {
  const details = [
    {
      title: 'Card 1',
      description: 'A short description for card 1'
    },
    {
      title: 'Card 2',
      description: 'A short description for card 2'
    },
    {
      title: 'Card 3',
      description: 'A short description for card 3'
    },
    {
      title: 'Card 4',
      description: 'A short description for card 4'
    }
  ]

  return <Cards details={details} />
}

export default App
