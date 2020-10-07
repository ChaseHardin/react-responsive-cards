import React from 'react'

import { Cards } from 'react-responsive-cards'
import Alert from 'react-bootstrap/Alert'
import 'react-responsive-cards/dist/index.css'
import Chance from 'chance'
const chance = new Chance()

const App = () => {
  const [selected, setSelected] = React.useState('');
  const cardInfo = () => {
    const title = chance.name();

    return {
      title,
      description: chance.paragraph(),
      variant: chance.pickone([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark'
      ]),
      buttonText: 'Details',
      callbackFn: () => setSelected(title)
    }
  }

  const details = chance.n(cardInfo, 100)

  return (
    <React.Fragment>
      {selected && <Alert variant={'dark'}>{selected} was selected</Alert>}
      <Cards details={details} />
    </React.Fragment>
  )
}

export default App
