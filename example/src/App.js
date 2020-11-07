import React from 'react'

import { Cards } from 'react-responsive-cards'
import 'react-responsive-cards/dist/index.css'
import Chance from 'chance'
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const chance = new Chance()

const renderFooter = title => {
  const handleClick = () => alert(title);

  return (
    <CardActions>
      <Button size="small" color="primary" onClick={handleClick}>Share</Button>
      <Button size="small" color="primary" onClick={handleClick}>Learn More</Button>
    </CardActions>
  )
}

const generateCardDetails = chance.n(() => {
  const title = chance.name();

  return {
    title,
    description: chance.paragraph(),
    image: `https://picsum.photos/500/500?images=${chance.natural({ min: 1, max: 100 })}`,
    renderFooter: renderFooter(title),
    handleOnClick: () => alert(title)
  }
}, 24)

export default () => <Cards details={generateCardDetails} />
