import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import FaceIcon from '@material-ui/icons/Face';
import { connect, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        shadowColor: "#endregion",
        shadowOpacity: 0.8,
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    button: {
        display: "block",
        textAlign: "center",
        appearance: "none",
        marginTop: "20px",
        border: "1px solid #333",
        marginBottom: "20px",
        textTransform: "uppercase",
        padding: "5px 5px",
        borderRadius: "2px",
    },
    loading: {
        textAlign: "center",
        padding: "20%"
    }
}));

function StudentsDetail(props) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [users, setUsers] = useState(props.list.usersList.state)
    console.log(props.list.usersList)

    if (props.list.usersList.state == 0) {
        return <p className={classes.loading}>Loading...</p>
    }
    return (<div>

        <List className={classes.root}>
            {users ? users.map((item, i) => {
                return (<ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FaceIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.name} />
                    <div class="container">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-8">
                                    <div >
                                        {/* <div class="col-sm-2"> */}
                                        <p>DOB:{item.birthday}</p>
                                        <p>{item.gender}</p>
                                        <p>College:{item.college}</p>
                                        {/* </div> */}
                                        {/* <div class="col-sm-2"> */}
                                        <p>hobbies:{item.hobbies}</p>
                                        <p>Address:{item.Address}</p>
                                        {/* </div> */}

                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <button className={classes.button}
                                        onClick={() => {
                                            props.history.push({
                                                pathname: "/udate_form",
                                                state: item
                                            })
                                        }}
                                    >Update</button>
                                </div>
                                <div class="col-sm-2">
                                    <button className={classes.button} key="button" onClick={() => {
                                        console.log(item)
                                        dispatch({
                                            type: 'DELETE_USER', arg: props.list.usersList.state.filter((items, index) => {
                                                return props.list.usersList.state.indexOf(items) == !item.index
                                            })
                                        })
                                        setUsers([props.list.usersList.state])

                                    }}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ListItem>)
            }) : <p>Loding...</p>}
        </List>

    </div >
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        list: state,
    }
}

export default connect(mapStateToProps)(StudentsDetail)