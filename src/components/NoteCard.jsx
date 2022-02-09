import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Typography } from '@material-ui/core';

export default function NoteCard({ note, handleDelete }) {
    return (
        <Card elevation={2}>
            <CardHeader
                action={
                    <IconButton onClick={() => handleDelete(note.id)} aria-label="delete">
                        <DeleteOutlineIcon />
                    </IconButton>
                }
                title={note.title}
                subheader={note.category}
            />
            <CardContent>
                <Typography variant='body2' color='textSecondary'>
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    )
}