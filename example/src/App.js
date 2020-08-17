import React from 'react'

import { Cards } from 'react-responsive-cards'
import 'react-responsive-cards/dist/index.css'

const App = () => {
  const details = [
    {
      title: 'Jimi Hendrix',
      description: 'James Marshall Hendrix was an American rock guitarist, singer, and songwriter.',
      image: 'https://cdn.mos.cms.futurecdn.net/Er7f2aS9ukBKBsVfR2Z9uE-320-80.jpg'
    },
    {
      title: 'Rolling Stones',
      description: 'The Rolling Stones are an English rock band formed in London in 1962.',
      image: 'https://zone1-ibizaspotlightsl.netdna-ssl.com/sites/default/files/styles/auto_1500_width/public/event-images/135458/slideshow-1578502154.png'
    },
    {
      title: 'Eric Clapton',
      description: 'Eric Clapton, an English rock and blues guitarist born on March 30th, 1945.',
      image: 'https://www.rollingstone.com/wp-content/uploads/2018/06/eric-clapton-story-rolling-stone-fricke-b7e7bfad-c8d1-40dd-8f64-2d14169b93bd.jpg'
    },
    {
      title: 'Freddie King',
      description: 'Freddie King was an American blues guitarist and singer (September 3, 1934 - December 28, 1976).',
      image: 'https://txba-media.s3.amazonaws.com/entry-images/4827/fk__large.jpg'
    }
  ]

  return <Cards details={details} />
}

export default App
