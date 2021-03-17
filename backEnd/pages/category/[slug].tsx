import { useRouter } from 'next/router'
import Link from 'next/link';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Icon, CircularProgress } from '@material-ui/core';

import categories from '../../mocks/categories';
import products from '../../mocks/products';

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

const Category = ({ userAgent }: any) => {
  const classes = useStyles(),
    router = useRouter(),
    { slug } = router.query;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Categoria {slug}</ListSubheader>
          <ListSubheader>Your user agent: {userAgent}</ListSubheader>
        </GridListTile>
        {
            /*
            categories.find(async (category: any) => await category.slug === slug)
            
          !products ? <CircularProgress color="secondary" /> : products.map(({ id, name, slug, img }: any) => (
            <Link href={`/products/${slug}`} passHref key={id}>
              <GridListTile>
                <img src={`/img/${img}`} alt={name} />
                <GridListTileBar
                  title={name}
                  subtitle={<span>by: </span>}
                  actionIcon={<Icon className="fas fa-info-circle" style={{ fontSize: 20 }} />}
                />
              </GridListTile>
            </Link>
          ))
        */
        }
      </GridList>
    </div>
  );
}

Category.getInitialProps = async ({ req }: any) => {
  console.log(req);
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default Category