import Link from 'next/link'
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { CircularProgress, GridList, GridListTile, ListSubheader, GridListTileBar, Icon, IconButton } from '@material-ui/core';

import Review from '../components/Cards/review';

import items from '../mocks/products';
import { Product } from '../__generated__/lib/type-defs.graphqls';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

const Products = ({ products }: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        !products ?
          <CircularProgress color="secondary" />
          :
          products?.map((product: Product) => <Link href={`/product/${product.slug}`} passHref key={product.id}>
            <Review {...product} />
          </Link>)
      }
    </div>
  );

}

Products.getInitialProps = async () => {
  return {
    products: items
  }
}

export default Products