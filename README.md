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
  const handleCallback = () => // do something;

  const details = [
    {
      title: 'The Card Title',
      description: 'This is a short description',
      image: 'https://<image_here>.jpg',
      variant: 'dark',
      buttonText: 'Details',
      callbackFn: handleCallback
    }
  ]

  return <Cards details={details} />
}

export default App
```

## Props
| PropName   | isRequired  | Type      | Description                                        |
| :--------- | :---------- | :-------- | -------------------------------------------------- |
|  details   |    yes      | Object[]  | An array of objects that build up the card details | 
|  image     |    no       | sring     | Card image                                         |
|  variant   |    no       | string    | Button color                                       | 
| buttonText |    no       | string    | Button text                                        |
| callbackFn |    no       | func      | Handle button click event                          |

## License

MIT © [ChaseHardin](https://github.com/ChaseHardin)
