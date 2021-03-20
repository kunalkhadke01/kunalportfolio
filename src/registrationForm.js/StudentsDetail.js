import React, { useState } from 'react';
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
    }
}));

function StudentsDetail(props) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [users, setUsers] = useState([props.list.usersList])

    console.log(props.list.usersList)
    return (<div>

        <List className={classes.root}>
            {users.map(item => {
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
                                                state: props.list.usersList
                                            })
                                        }}
                                    >Update</button>
                                </div>
                                <div class="col-sm-2">
                                    <button className={classes.button} onClick={() => {
                                        dispatch({
                                            type: 'DATA_SUBMIT', data: [item].filter((items, index) => {
                                                return [item].indexOf(items) !== index
                                            }),

                                        })
                                        window.location.reload()
                                    }}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ListItem>)
            })}
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