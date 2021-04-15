import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import BackContainer from "../content/backContainer";
import Draggable, { DraggableCore } from 'react-draggable';
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.action.hover,
        position: 'relative',
        overflow: 'auto',
        maxHeight: "50px",
        height: "100px",
        marginBottom: 4
    },
    resurvedBox: {
        width: '100%',
        // backgroundColor: theme.palette.divider,
        border: "1px solid black",
        position: 'relative',
        overflow: 'auto',
        height: "500px",
        maxHeight: "200px",
        marginBottom: 4,
        marginTop: 50
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    // appBarShift: {
    //     marginLeft: drawerWidth,
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
}));
const ListSpacex = (props) => {
    const classes = useStyles();
    const [data, setData] = React.useState([]);
    // const dispatch = useDispatch()
    console.log(data)
    useEffect(() => {
        async function fetchData() {
            const SPACEINFO = await fetch('https://api.spacexdata.com/v2/launches')
                .then(r => r.json())
                .then(res => setData(res.slice(0, 10)))
        }
        fetchData()
    }, [setData])
    return (<div>
        <BackContainer onClick={() => props.history.goBack()} title="ROCKET SUMMARY" />

        <div className={classes.resurvedBox}>
            <h4>Important to read</h4>
        </div>
        <ul >

            <li className={classes.ul}>
                {data.map((item, index) => (
                    <Draggable
                        axis="y"
                        draggableId={index}
                    >
                        <List className={classes.root} subheader={<li />} key={index} >
                            <ListItem >
                                <ListItemText primary={item.rocket.rocket_name} secondary={item.details} />
                            </ListItem>
                        </List>
                    </Draggable>
                ))}
            </li>
        </ul>
    </div>
    )
}
export default ListSpacex;