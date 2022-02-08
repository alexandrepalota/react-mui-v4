import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

export default function Create() {
    return (
        <Container>
            <Typography
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
            >
                Submit
            </Button>
        </Container>
    )
}