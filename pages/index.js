import Head from 'next/head'
import Link from '@material-ui/core/Link'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useStyles } from '../components/styles'

export default function Home() {
  const styles = useStyles()
  return (
    <div>
      <Hero/>
      <Grid container alignItems="center" justifyContent='center'>
        <Paper className={styles.mainText}>
          <Typography variant="p">
            Hey I'm Nate!  I'm a Data Scientist/Developer currently working
            as a Scientific Solutions Engineer <Link href='https://flywheel.io' target='_blank'>Flywheel</Link>. 
            I'm passionate about applying mathematics and statistics to biological problems.
          </Typography>
          <Typography variant="p">
            I love to learn and discover new things so I have a lot of projects outside of work. 
            Most recently I've been really interested in computer networking and self-hosting. 
            Over the past few years I've been accumulating hardware and implementing software to
            make my own networking lab with which to experiment, including building this website! 
            Check out my <Link href='wiki.nrichman.dev' target="_blank">Wiki</Link> to learn more
            about what I've been up to
          </Typography>
          <Typography variant="p">
            Outside of work and somewhat nerdy computer things, I love to play, 
            <Link href='https://www.last.fm/user/naterich2' target='_blank'>listen to</Link>, 
            and <Link href='https://rateyourmusic.com/~naterich2' target='_blank'>rate</Link> music. 
            I love to bike, rock climb, camp, canoe, hike, kayak, disc golf, and play ultimate frisbee.
          </Typography>
        </Paper>
      </Grid>
      <Footer/>
    </div>
  )
}
