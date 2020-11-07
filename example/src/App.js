import React from 'react'

import { Cards } from 'react-responsive-cards'
import 'react-responsive-cards/dist/index.css'
import Chance from 'chance'
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share'

const chance = new Chance()

const renderFooter = title => {
  const handleClick = () => alert(title);

  return (
    <CardActions>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon onClick={handleClick} />
      </IconButton>
      <IconButton aria-label="add to favorites">
        <ShareIcon onClick={handleClick} />
      </IconButton>
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
