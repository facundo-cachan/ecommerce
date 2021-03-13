import { useRouter } from 'next/router'
import Link from 'next/link';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Icon, CircularProgress } from '@material-ui/core';

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

const Category = ({ category }: any) => {
  const classes = useStyles();
  const router = useRouter()
  const { id } = router.query
  console.log({ id })
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Categorias</ListSubheader>
        </GridListTile>
        {
          !category ? <CircularProgress color="secondary" /> : category.map(({ id, name, slug, img }: any) => (
            <Link href={`/products/${slug}`} passHref>
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
        }
      </GridList>
    </div>
  );
}

Category.getInitialProps = async () => {
  return {
    category: [
      { id: 0, name: "De Campo", slug: "de-campo", img: "pan.jpg" },
      { id: 1, name: "Clasico", slug: "clasico", img: "damajuana.jpg" }
    ]
  }
}

export default Category