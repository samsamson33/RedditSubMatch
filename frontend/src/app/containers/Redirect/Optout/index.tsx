import * as React from 'react';
import * as style from '../style.scss';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Hidden, Link, IconButton } from '@material-ui/core';
import { GitHub, Reddit } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => createStyles({
    title: {
        fontSize: '5rem',
        marginTop: '20vh',
        marginBottom: '20vh',
        [theme.breakpoints.down('md')]: {
            fontSize: '6rem',
        }
    },
    text: {
        fontSize: '2.5rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '3rem',
        }
    },
    noSelect: {
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        KhtmlUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',
    }
}));

export default function Optout(props) {
    const styles = useStyles();

    return (
        <Container maxWidth={false} classes={{ root: style.normal }}>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                style={{ minHeight: '100vh' }}>
                <Typography display="block" className={`${styles.title} ${style.titleFont} ${styles.noSelect}`}>submatch</Typography>
                <Typography display="block" align="center" gutterBottom className={`${styles.text} ${styles.noSelect}`}>
                    You have been <b style={{ color: '#29a329' }}>removed</b> from matching and any data you've given us has been deleted.
                </Typography>
                <Hidden mdDown>
                    <Grid classes={{ root: style.bottomButtons }} direction="row" alignItems="center" justify="center">
                        <Link href='https://github.com/LucasAnderson07/RedditSubMatch'>
                            <IconButton>
                                <GitHub fontSize="large" />
                            </IconButton>
                        </Link>
                        <Link href='https://www.reddit.com/r/submatch'>
                            <IconButton>
                                <Reddit color="secondary" fontSize="large" />
                            </IconButton>
                        </Link>
                    </Grid>
                </Hidden>
            </Grid>
        </Container>
    );
}