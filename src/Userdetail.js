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
                            <h5>Address 1</h5>
                            <h5>Address 2</h5>
                            <h5>Country</h5>
                            <h5>State</h5>
                            <h5>City</h5>
                            <h5>product</h5>
                        </div>
                        <div class="col-sm-6">
                            <h5>{this.props.history.location.state[0].Address1}</h5>
                            <h5>{this.props.history.location.state[0].Address2}</h5>
                            <h5>{this.props.history.location.state[0].Country}</h5>
                            <h5>{this.props.history.location.state[0].State}</h5>
                            <h5>{this.props.history.location.state[0].City}</h5>
                            <h5>{this.props.history.location.state[1]}</h5>

                        </div>
                    </div>
                    <button style={{ backgroundColor: "lightblue", width: 100 }} onClick={() => alert("Thank you for order")}>place order</button>
                </div>
            </Fragment>
        )
    }
}

export default UserDetail;