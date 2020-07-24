import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetail extends Component {
     continue= e =>{ 
         e.preventDefault();
         this.props.nextStep();
       }
    back = e =>{ 
        e.preventDefault();
        this.props.prevStep();
      }


    render(){
        const {values,handleChange} = this.props;
  return (
    <MuiThemeProvider >
    <React.Fragment>
        <AppBar title="Enter user detail" />
        <TextField hintText="Enter occupation " 
        floatingLabelText="occupation" 
        onChange={handleChange('occupation')}
        defaultValue={values.occupation} />
        <br/>
        <TextField hintText="Enter your City " 
        floatingLabelText="City" 
        onChange={handleChange('city')}
        defaultValue={values.city} />
        <br/>
        <TextField hintText="Enter your bio " 
        floatingLabelText="bio" 
        onChange={handleChange('bio')}
        defaultValue={values.bio} />
        <br/>
        <RaisedButton
        label="Continue"
        primary={false}
        style={styles.button}
        onClick={this.continue} />

        <RaisedButton
        label="Back"
        primary={true}
        style={styles.button}
        onClick={this.back} />

    </React.Fragment>
    </MuiThemeProvider>
  );
}
}

const styles= {
    button:{
        margin:15
    }
}

export default FormPersonalDetail
