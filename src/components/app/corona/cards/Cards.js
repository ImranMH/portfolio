import React from 'react'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup';
import cx from 'classnames';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    card: {
        margin: '0 2% !important',
    },
    infected: {
        borderBottom: '5px solid yellow',
    },
    deaths: {
        borderBottom: '5px solid red',
    },
    recovered: {
        borderBottom: '5px solid green',
    },
    title: {
        fontSize: 18,
        color: '#555555'
    },
    pos: {
        marginBottom: 12,
    },
});


export default function Cards({ data: { confirmed, recovered, deaths, lastUpdate }, country }) {
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;
    // console.log(lastUpdate);
    if (!confirmed) {
        return <h2>Loading...</h2>
    }
    const title = country ? <h2 className='title'>{country}</h2> : <h2 className='title'> Worldwide</h2>
    return (
        <div>
            {title}
            <div className="card_container">
                <Card className={cx(classes.root, classes.card, classes.infected)} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography className={classes.title} variant="h5" component="h2">
                            <CountUp start={0} duration={2.75}
                                separator=" " end={confirmed.value} />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Number of Covid-19 patient
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card className={cx(classes.root, classes.card, classes.deaths)} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography className={classes.title} variant="h5" component="h2">
                            <CountUp start={0} duration={2.75}
                                separator=" " end={deaths.value} />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Number of Covid-19 patient
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card className={cx(classes.root, classes.card, classes.recovered)} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Recovered
                    </Typography>
                        <Typography className={classes.title} variant="h5" component="h2">
                            <CountUp start={0} duration={2.75}
                                separator=" " end={recovered.value} />

                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Number of Covid-19 patient
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>

    )
}
