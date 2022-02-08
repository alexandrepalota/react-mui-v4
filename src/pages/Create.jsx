import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    btn: {
        fontSize: 60,
        backgroundColor: 'violet',
        '&:hover': {
            backgroundColor: 'blue'
        }
    },
    title: {
        marginBottom: 20
    }
})

export default function Create() {

    const classes = useStyles()

    return (
        <Container>
            <Typography
                className={classes.title}
                variant='h6'
                component='h2'
                color='textSecondary'
                gutterBottom
            >
                Create a New Note
            </Typography>

            <Button
                onClick={() => console.log('You clicked me')}
                color='secondary'
                variant='contained'
                endIcon={<KeyboardArrowRightIcon />}
            >
                Submit
            </Button>
        </Container>
    )
}