# react-responsive-cards

> A React library to quickly build a responsive grid of cards.

[![NPM](http://img.shields.io/npm/v/react-responsive-cards.svg?style=for-the-badge&logo=appveyor)](https://www.npmjs.com/package/react-responsive-cards) [![JavaScript Style Guide](http://img.shields.io/badge/code_style-standard-brightgreen.svg?style=for-the-badge&logo=appveyor)](https://standardjs.com)

## Demo
View demo [here](https://chasehardin.github.io/react-responsive-cards-demo/)

## Material UI
React responsive cards is built using [material-ui](https://material-ui.com/) as a peer dependency. The consuming app should also install the following:
```
npm install @material-ui/core --save
npm install @material-ui/icons --save
```
Note - that `react-responsive-cards` will work with material ui components. For example, it will take a material ui component and build the card footer.

## Install

```bash
npm install --save react-responsive-cards
```

## Usage
```jsx
import React from 'react'

import { Cards } from 'react-responsive-cards'

const App = () => {
  const details = [
    {
      title: 'The Card Title',
      description: 'This is a short description',
      image: 'https://<image_here>.jpg',
      renderFooter: <div>{'Custom JSX'}</div>,
      handleOnClick: () => alert('Custom Event')
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
|  handleOnClick |    no       | Fn        | Allows a user to set event handler on entire card     | 

## License

MIT © [ChaseHardin](https://github.com/ChaseHardin)
