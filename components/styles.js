import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    hero: {
        height: "60vh",
        backgroundAttachment: "fixed",
    },
    heroImage: {
        position: "fixed",
        top: 0,
        left: 0,
        height: '60vh',
        width: "100%",
        backgroundImage: "url('https://hallmark.brightspotcdn.com/8a/2a/335dbdbd2067a0b00e365ed06508/winter-background-3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        //filter: "blur(5px)",
        "-webkit-filter": "blur(5px)",
        zIndex: -1,

    },
    heroTextContainer: {
        zIndex: 0,
        height: "100%",
    },
    heroText: {
        height: "100%",
    },
    footer: {
        backgroundAttachment: 'scroll', 
        paddingTop: '5%',
        width: '100%', 
        backgroundColor: theme.palette.background.default
    },
    mainText: {
        justifyContent: "center",
        align: "center",
        width: "80%"
    }
}))