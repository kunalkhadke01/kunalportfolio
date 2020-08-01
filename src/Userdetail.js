import React, { Fragment } from "react";
// import { Grid, TextField } from "@react-material"

class UserDetail extends React.Component {
    render(props) {
        console.log(this.props)
        return (
            <Fragment>
                <h1 style={{ textAlign: 'center', color: "lightgreen" }}>welcome {this.props.history.location.state.username}</h1>
                <div class="container"
                    style={{
                        textAlign: "center",
                        border: '1px outset blue',
                        backgroundColor: 'lightblue',
                        margin: 0,
                        padding: 10,
                        position: "absolute",
                        top: "10%",
                        left: "10%",
                    }}>
                    <div class="col-sm-12">
                        <div class="col-sm-6">
                            <h5>username</h5>
                            <h5>password</h5>
                            <h5>email</h5>
                            <h5>phone no.</h5>
                            <h5>address</h5>
                        </div>
                        <div class="col-sm-6">
                            <h5>{this.props.history.location.state.username}</h5>
                            <h5>{this.props.history.location.state.password}</h5>
                            <h5>{this.props.history.location.state.email}</h5>
                            <h5>{this.props.history.location.state.phonenumber}</h5>
                            <h5>{this.props.history.location.state.address}</h5>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default UserDetail;