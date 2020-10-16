# react-responsive-cards

> A React library to quickly build a responsive grid of cards.

[![NPM](http://img.shields.io/npm/v/react-responsive-cards.svg?style=for-the-badge&logo=appveyor)](https://www.npmjs.com/package/react-responsive-cards) [![JavaScript Style Guide](http://img.shields.io/badge/code_style-standard-brightgreen.svg?style=for-the-badge&logo=appveyor)](https://standardjs.com)

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
      title: 'The Card Title',
      description: 'This is a short description',
      image: 'https://<image_here>.jpg',
      renderFooter: <div>{'Custom JSX'}</div>
    }
  ]

  return <Cards details={details} />
}

export default App
```

## Props
| PropName       | isRequired  | Type      | Description                                           |
| :------------- | :---------- | :-------- | ----------------------------------------------------- |
|  details       |    yes      | Object[]  | An array of objects that build up the card details    |  
|  image         |    no       | sring     | Card image                                            |
|  renderFooter  |    no       | JSX       | Allows custom JSX to generate footer                  | 

## License

MIT © [ChaseHardin](https://github.com/ChaseHardin)
