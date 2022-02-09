import { makeStyles } from "@material-ui/core"
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { AddCircleOutline, SubjectOutlined } from "@material-ui/icons"
import { useLocation, useNavigate } from "react-router"

const drawerWidth = 240

const useStyles = makeStyles({
    root: {
        display: 'flex'
    },
    page: {
        background: '#f9f9f9',
        width: '100%'
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    active: {
        backgroundColor: '#f4f4f4'
    }
})

export default function Layout({ children }) {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='secondary'/>,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutline color='secondary'/>,
            path: '/create'
        }
    ]
    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant='h5'>
                        Ninja Notes
                    </Typography>
                </div>
                {/* list /links */}
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            key={item.text}
                            button
                            onClick={() => navigate(item.path)}
                            className={location.pathname == item.path ? classes.active : null}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}