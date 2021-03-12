import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
class DetailPolicy extends Component {

    render() {
        console.log(this.props)
        return (
            <Grid container direction="row" justify="center" alignItems="center">
                <div>
                    <span>Configure policy:{this.props.location.state.name}</span>
                    <p style={{ fontWeight: "bold" }}>{this.props.location.state.name}</p>
                    <p>Detect suspicious transper of data outside the origin</p>
                    <p>SEVERITY</p>
                    <TextField
                        id="standard-select-currency-native"
                        select
                        label={this.props.location.state.severity}
                        // className={classes.textField}
                        helperText="Please select your currency"
                        margin="normal"
                    >

                        <option>
                            {this.props.location.state.severity}
                        </option>
                    </TextField>
                    <p>Additional criteria</p>
                    <TextField
                        id="Additional criteria"
                        label="user=all user click to select of users"
                        // className={classes.textField}
                        // value={this.state.name}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                    /><br></br>
                    <TextField
                        id="standard-name"
                        label="DSP APP =1010 data"
                        // className={classes.textField}
                        // value={this.state.name}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                    />
                    <p>status</p>
                    <Switch
                        checked="true"
                        // onChange={this.handleChange('checkedB')}
                        value="checkedB"
                        color="primary"
                    />
                    <p>Last EDIT</p>
                    <p>Edited on{Date(this.props.location.state.time_interval)}</p>
                </div>
            </Grid>
        );
    }
}

export default DetailPolicy;