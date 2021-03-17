import { useState } from 'react';
import clsx from 'clsx';

import { makeStyles, Theme, createStyles, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, Icon, IconButton, Typography } from '@material-ui/core';

import { red } from '@material-ui/core/colors';
import { Product } from '__generated__/lib/type-defs.graphqls';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const Review = ({ id, name, slug, price, title, details, img, unit, published, updatedAt, categories, dish }: Product) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar alt="opmany Name" src="/img/logo.jpg" aria-label="nombre" className={classes.avatar} />}
        action={
          <IconButton aria-label="settings">
            <Icon>ellipsis-v</Icon>
          </IconButton>
        }
        title={title}
        subheader={updatedAt}
      />
      <CardMedia
        className={classes.media}
        image={`/img/${img}`}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {details}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to shopping cart" onClick={() => console.log('add_shopping_cart', name)}>
          <Icon>add_shopping_cart</Icon>
        </IconButton>
        <IconButton aria-label="share" onClick={() => console.log('share', name)}>
          <Icon>share</Icon>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Ver más"
        >
          <Icon>expand_more</Icon>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Receta:</Typography>
          <Typography paragraph>
            {dish}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Review