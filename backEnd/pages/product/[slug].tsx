import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { CircularProgress, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, Icon } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

import { useState } from 'react';

import { useRouter } from 'next/router';

import items from '../../mocks/products';

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


const Product = (props: any) => {
    console.log(props);
    const classes = useStyles(),
        [expanded, setExpanded] = useState(false),
        handleExpandClick = () => {
            setExpanded(!expanded)
        },
        router = useRouter(),
        { slug } = router.query,
        { id, name, updateAt, img, dish }: any = items.find((product: any) => product.slug === slug);

    return !id ? <CircularProgress color="secondary" /> : (
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

export default Product