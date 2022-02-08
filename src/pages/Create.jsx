import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { FormControl, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    field: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display: 'block'
    }
}))

export default function Create() {

    const classes = useStyles()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('todos')

    const handleSubmit = e => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if (title == '') {
            setTitleError(true)
        }

        if (details == '') {
            setDetailsError(true)
        }

        if (title && details) {
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({title, details, category})
            }).then(() => navigate('/'))
            setTitle('')
            setDetails('')
            setTitleError(false)
            setDetailsError(false)
        }

    }

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

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    className={classes.field}
                    label='Note Title'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    error={titleError}
                    helperText={titleError ? 'Title must not be empty' : ''}
                />

                <TextField
                    onChange={e => setDetails(e.target.value)}
                    value={details}
                    className={classes.field}
                    label='Details'
                    variant='outlined'
                    color='secondary'
                    multiline
                    minRows={4}
                    fullWidth
                    required
                    error={detailsError}
                    helperText={detailsError ? 'Details must not be empty' : ''}
                />

                <FormControl className={classes.field}>
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={e => setCategory(e.target.value)}>
                        <FormControlLabel control={<Radio value="hello" />} value="money" label="Money" />
                        <FormControlLabel control={<Radio value="todos" />} value="money" label="ToDos" />
                        <FormControlLabel control={<Radio value="reminders" />} value="money" label="Reminders" />
                        <FormControlLabel control={<Radio value="work" />} value="money" label="Work" />
                    </RadioGroup>
                </FormControl>

                <Button
                    type='Submit'
                    color='secondary'
                    variant='contained'
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    Submit
                </Button>
            </form>

        </Container>
    )
}