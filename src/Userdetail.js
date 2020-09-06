import React, { Fragment } from "react";
// import { Grid, TextField } from "@react-material"

class UserDetail extends React.Component {
    render(props) {
        console.log(this.props)
        return (
            <Fragment>
                <img
                    src={this.props.history.location.state[1].image}
                    alt="logo"
                    style={{
                        width: 80,
                        height: 80,
                    }}
                />
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
                    {/* <div class="col-sm-12"> */}
                    <div class="col-sm-6">
                        <h5>Name</h5>
                    </div>
                    <div class="col-sm-6">
                        <h5>{this.props.history.location.state[0].name}</h5>
                    </div>
                    <div class="col-sm-6">
                        <h5>Age</h5>
                    </div>
                    <div class="col-sm-6">
                        <h5>{this.props.history.location.state[0].age}</h5>
                    </div>
                    <div class="col-sm-6">
                        <h5>Gender</h5>
                    </div>
                    <div class="col-sm-6">
                        <h5>{this.props.history.location.state[0].gender}</h5>
                    </div>
                    {/* </div> */}

                    {/* </div> */}
                    <button style={{ backgroundColor: "lightblue", width: 100 }} onClick={() => alert("Thank you for order")}>place order</button>
                </div>
            </Fragment>
        )
    }
}

export default UserDetail;