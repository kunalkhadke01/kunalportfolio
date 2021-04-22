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
import Draggable, { DraggableCore, Droppable } from 'react-draggable';
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
        height: "300px",
        maxHeight: "150px",
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
let obj = [{ src: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" },
{ src: "https://www.cnet.com/a/img/9dR_PSX2J0GAHuE0qEnm1T93iws=/940x0/2020/04/14/1705352e-1f1e-4bc9-8c23-8520ddc4cb31/kiss-emoji.png" },
{ src: "https://media.wired.com/photos/59273186cefba457b079c5e2/master/pass/LoveEmoji.jpg" },
{ src: "https://cdn1.vectorstock.com/i/1000x1000/15/85/gift-box-vector-1721585.jpg" },
{ src: "https://pngimg.com/uploads/gift/gift_PNG100228.png" }
]
const ListSpacex = (props) => {
    const classes = useStyles();
    const [data, setData] = React.useState([]);
    const [droped, setPosition] = React.useState([]);
    // const [url, setUrl] = React.useState([]);
    console.log(droped)
    let p1 = performance.now()
    useEffect(() => {
        async function fetchData() {
            const SPACEINFO = await fetch('https://api.spacexdata.com/v2/launches')
                .then(r => r.json())
                .then(res => setData(res.slice(0, 10)))
        }
        fetchData()
    }, [setData])
    let p2 = performance.now()
    console.log(p2 - p1)
    function handleOnDragEnd(data) {
        console.log(data)
        setPosition([...droped, [{ width: data.changedTouches[0].clientX, repos: data.path[0].currentSrc, height: data.changedTouches[0].clientY }]])
    }
    function handleStart(e: DraggableEvent, data: DraggableData) {
        console.log(data)
        // setPosition([...droped, data])
    }

    return (<div>
        <BackContainer onClick={() => props.history.goBack()} title="IMAGE EDITOR" />

        <div className={classes.resurvedBox}>


        </div>

        {obj.map((value) => (
            <Draggable
                onStart={handleStart}
                onStop={handleOnDragEnd}
            ><img style={{ width: "20%", height: "20%" }}
                src={value.src} />

            </Draggable>
        ))}

        <button onClick={() => props.history.push({
            pathname: "/simpleui",
            state: droped
        })}>click</button>

    </div>
    )
}
export default ListSpacex;