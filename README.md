# react-responsive-cards

> A React library to quickly build a responsive grid of cards.

[![NPM](https://img.shields.io/npm/v/react-responsive-cards.svg)](https://www.npmjs.com/package/react-responsive-cards) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo
View demo [here](https://chasehardin.github.io/react-responsive-cards/)

## Install

```bash
npm install --save react-responsive-cards
```

## Usage
```jsx
import React from 'react'

import { Cards } from 'react-responsive-cards'
import 'react-responsive-cards/dist/index.css'

const App = () => {
  const details = [
    {
      title: 'Jimi Hendrix',
      description: 'James Marshall Hendrix was an American rock guitarist, singer, and songwriter.',
      image: 'https://hendrix.jpg',
      variant: 'dark',
      buttonText: 'Details',
      callbackFn: () => setSelected('Hendrix')
    },
    {
      title: 'Rolling Stones',
      description: 'The Rolling Stones are an English rock band formed in London in 1962.',
      image: 'https://rolling-stones.png',
      variant: 'dark',
      buttonText: 'Details',
      callbackFn: () => setSelected('Stones')
    },
    {
      title: 'Eric Clapton',
      description: 'Eric Clapton, an English rock and blues guitarist born on March 30th, 1945.',
      image: 'https://eric-clapton.jpg',
      variant: 'dark',
      buttonText: 'Details',
      callbackFn: () => setSelected('Clapton')
    },
    {
      title: 'Freddie King',
      description: 'Freddie King was an American blues guitarist and singer (September 3, 1934 - December 28, 1976).',
      image: 'https://freddie-king.jpg',
      variant: 'dark',
      buttonText: 'Details',
      callbackFn: () => setSelected('King')
    }
  ]

  return <Cards details={details} />
}

export default App
```

## Props
| PropName   | isRequired  | Type      | Description                                                         |
| :--------- | :---------- | :-------- | --------------------------------------------------                  |
|  details   |    yes      | Object[]  | An array of objects that build up the card details                  | 
|  image     |    no       | sring     | Card image                                                          |
|  variant   |    no       | string    | Used to specify button color                                        | 
| buttonText |    no       | string    | Sets the button text                                                |
| callbackFn |    no       | func      | Allows consumers to specify behavior when button event is triggered |

## License

MIT © [ChaseHardin](https://github.com/ChaseHardin)
