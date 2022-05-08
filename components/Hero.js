import {React, useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './styles'

export default function Hero(){
    const styles = useStyles()

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.hero}>
            <div className={styles.heroImage}></div>
            <Container className={styles.heroTextContainer}>
                <Grid 
                    container
                    alignItems="center"
                    justifyContent='space-between'
                    className={styles.heroText}
                >
                    <Grid item xs={12}>
                        <Typography variant='h5'>{new Intl.DateTimeFormat('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric' 
                        }).format(date.curTime)}</Typography>
                        <Typography variant="h6">{new Intl.DateTimeFormat('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                            timeZoneName: 'short' 
                        }).format(date.curTime)}</Typography>
                    </Grid>
                    <Grid item xs={12} style={{"text-align": "center"}}>
                        <Typography variant="h3">Nate Richman</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}