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
import BackContainer from '../content/backContainer';
var getBase64 = require('get-base64');

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",

    },
    button: {
        backgroundColor: "rgba(255, 10, 135, 5)",
        color: "#ffffff",
        textTransform: "uppercase",
        padding: "5px 5px",
        borderRadius: "2px",
    },
    card: {
        width: '100%',
        shadowColor: "#000000",
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
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
    const [imageUrl, setImage] = useState("")
    useEffect(() => {
        localStorage.setItem("STATE", JSON.stringify(users, imageUrl))
    })
    console.log(props.list.usersList.state)

    console.log(imageUrl)

    const getBase64 = (cb) => {
        let file = users[0].img[0]
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    getBase64().then(
        data => setImage(data)
    );
    //  reader.readAsDataURL(files[0])
    if (props.list.usersList.state == 0) {
        return <p className={classes.loading}>Loading...</p>
    }
    return (<div className={classes.root}>
        <BackContainer title="DETAIL" />
        <List className={classes.card} style={{ marginTop: 60 }}>
            {users ? users.map((item, i) => {
                return (<ListItem>
                    <ListItemAvatar>
                        <Avatar style={{ width: "60px", height: "60px" }}>
                            <img src={imageUrl} type="image" style={{ width: "60px", height: "60px" }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.name} />
                    <div class="container">
                        <div class="row">
                            {/* <div class="col-md-12"> */}

                            <div class="col-md-6">
                                <div >
                                    {/* <div class="col-sm-2"> */}
                                    <p>DOB:-<span>{item.birthday}</span></p>
                                    <p>Gender:-<span>{item.gender}</span></p>
                                    <p>College:-<span>{item.college}</span></p>
                                    {/* </div> */}
                                    {/* <div class="col-sm-2"> */}
                                    <p>hobbies:-<span>{item.hobbies}</span></p>
                                    <p>Address:-<span>{item.Address}</span></p>
                                    {/* </div> */}

                                </div>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <button type="button" style={{ backgroundColor: "red" }}
                                            onClick={() => {
                                                props.history.push({
                                                    pathname: "/udate_form",
                                                    state: item
                                                })
                                            }}
                                        >Update</button>
                                    </div>
                                    <div class="col-md-6">
                                        <button key="button" type="button" onClick={() => {
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
                        {/* </div> */}
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