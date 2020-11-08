import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    maxWidth: 455
  },
  media: {
    height: 300
  }
})

export const Cards = (props) => {
  const classes = useStyles()

  const renderCard = (detail, index) => {
    return (
      <Grid
        container
        direction='row'
        item
        sm={6}
        md={4}
        lg={3}
        alignItems='center'
        justify='center'
        key={index}
      >
        <Card
          className={classes.root}
          key={detail.title}
          style={{ margin: '6px' }}
        >
          <CardActionArea onClick={detail.handleOnClick}>
            <CardMedia
              data-card-media={detail.title}
              className={classes.media}
              image={
                detail.image
                  ? detail.image
                  : 'https://via.placeholder.com/500x500.png?text=react-responsive-cards'
              }
              title={detail.title}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {detail.title}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p' style={{ height: '50px' }}>
                {detail.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          {detail.renderFooter}
        </Card>
      </Grid>
    )
  }

  return (
    <Grid container justify='center'>
      {props.details.map((detail, index) => renderCard(detail, index))}
    </Grid>
  )
}
