import Link from 'next/link'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { ListItemAvatar, Paper, Grid, Avatar, Typography, CircularProgress } from '@material-ui/core';

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

const Products = ({products}: any) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
        !products ? <CircularProgress color="secondary" /> : products.map(({ id, name, img, slug }: any) => <ListItemAvatar key={id}>
          <Link href={`/products/${slug}`} passHref>
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

Products.getInitialProps = async () => {
  return {
    products: [
      { id: 0, name: "Panes", slug: "pan", img: "pan.jpg" },
      { id: 1, name: "Damajuanas", slug: "damajuana", img: "damajuana.jpg" }
    ]
  }
}

export default Products