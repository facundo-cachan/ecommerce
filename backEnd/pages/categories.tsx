import Link from 'next/link'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { ListItemAvatar, Paper, Grid, Avatar, Typography, CircularProgress } from '@material-ui/core';

import items from '../mocks/categories';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
  }),
);

const Categories = ({categories}: any) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
        !categories ? <CircularProgress color="secondary" /> : categories.map(({ id, name, img, slug }: any) => <ListItemAvatar key={id}>
          <Link href={`/category/${slug}`} passHref>
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar src={`img/${img}`} alt={name} />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography noWrap>{name}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Link>
      </ListItemAvatar>)
      }
    </div>
  );
}

Categories.getInitialProps = async () => {
  return {
    categories: items
  }
}

export default Categories