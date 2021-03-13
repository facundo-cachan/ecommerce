import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { Typography, Icon } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { useState } from 'react';


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

const Product = ({ product: { id, name, slug, img, dish, updateAt } }: any) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar alt="Logo" src="/img/logo.jpg" className={classes.avatar} />
                }
                action={
                    <IconButton aria-label="settings">
                        <Icon className="fas fa-ellipsis-v" style={{ fontSize: 20 }} />
                    </IconButton>
                }
                title={name}
                subheader={updateAt}
            />
            <CardMedia
                className={classes.media}
                image={`/img/${img}`}
                title={`${name} plato`}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Icon className="fas fa-heart" style={{ fontSize: 20 }} />
                </IconButton>
                <IconButton aria-label="share">
                    <Icon className="fas fa-share-alt" style={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <Icon className="fas fa-expand-alt" style={{ fontSize: 20 }} />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Preparacion:</Typography>
                    <Typography paragraph>
                        {dish}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

Product.getInitialProps = async () => {
    return {
        product: {
            id: 0,
            name: "De Campo",
            slug: "de-campo",
            img: "pan.jpg",
            dish: "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1 / 2 cups chicken broth; bring to a boil. Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.) Set aside off of the heat to let rest for 10 minutes, and then serve.",
            updateAt: "September 14, 2016"
        }
    }
}

export default Product