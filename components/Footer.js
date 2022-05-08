import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled,  makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import React from 'react'
import { useStyles } from './styles'


library.add(fab)
const social = [
    ['linkedin', 'https://www.linkedin.com/in/nathan-richman-b95453124/'],
    ['github', 'https://github.com/naterichman'],
    ['git-square', 'https://git.nrichman.dev/nrichman']
]
const logos = social.map(([icon, link], idx) => {
  return (
    <Grid item md={1} justify='center' key={`logo-${idx}`} style={{textAlign: 'center'}}>
      <a href={link} key={'icon-' + idx}><FontAwesomeIcon style={{
        verticalAlign: 'middle',
        padingLeft: '2px',
        paddingRight: '2px',
        marginLeft: '2px',
        marginRight: '2px',
        color: 'rgb(100,100,100)'
      }} icon={['fab', icon]} size='2x' /></a>
      </Grid>
  )
})
const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: -1,
  borderRadius: 2,
  boxShadow: '-1 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 47,
  padding: '-1 30px',
});

export default function Footer (props) {
  const classes = useStyles(props.theme);
  return (
    <div className={classes.footer}>
      <Grid container spacing={2} justify='center' alignItems='center'>
        <Grid container item md={12} justify='center' alignContent='center'>
          <Grid item md={2} style={{textAlign:'center'}}>
            <MyButton variant='contained' href='mailto:nate@nrichman.dev'>Send me a message!</MyButton>
          </Grid>
        </Grid>
        <Grid container item md={12} justify='center' alignContent='center'>
            {logos}
        </Grid>
        <Grid container item md={12} justify='center' alignContent='center'>
          <Grid item md={6}>
            <p style={{ textAlign: 'center' }}>Made by Nate Richman using Nextjs, React and Material-UI</p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}