import React from 'react'

import { Cards } from 'react-responsive-cards'
import 'react-responsive-cards/dist/index.css'

const App = () => {
  const details = [
    {
      title: 'Jimi Hendrix',
      description: 'James Marshall Hendrix was an American rock guitarist, singer, and songwriter.'
    },
    {
      title: 'Rolling Stones',
      description: 'The Rolling Stones are an English rock band formed in London in 1962.'
    },
    {
      title: 'Freddie King',
      description: 'Freddie King was an American blues guitarist and singer (September 3, 1934 - December 28, 1976).'
    },
    {
      title: 'Eric Clapton',
      description: 'Eric Clapton, an English rock and blues guitarist born on March 30th, 1945.'
    }
  ]

  return <Cards details={details} />
}

export default App
