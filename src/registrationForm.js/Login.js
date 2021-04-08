import React, { useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import Autocomplete from '@material-ui/lab/Autocomplete';
import BackContainer from '../content/backContainer';
// import Select from "react-select";
import {
    TextField,
    Checkbox,
    Select,
    MenuItem,
    Switch,
    RadioGroup,
    FormControlLabel,
    ThemeProvider,
    Radio,
    createMuiTheme
} from "@material-ui/core";
import { connect, useDispatch } from 'react-redux';
import './Addinfo.css';
// import TextField from '@material-ui/core/TextField';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


const top100Films = [
    {
        title: "criket"
    },
    {
        title: "football"
    }
]

const collegeinfo = [
    {
        web_page: "http://www.meu.edu.jo/",
        country: "Jordan",
        domain: "meu.edu.jo",
        name: "Middle East University"
    },
    {
        web_page: "http://www.odtu.edu.tr/",
        country: "Turkey",
        domain: "odtu.edu.tr",
        name: "Middle East Technical University"
    },
    {
        web_page: "http://www.mtsu.edu/",
        country: "USA",
        domain: "mtsu.edu",
        name: "Middle Tennessee State University"
    },
    {
        web_page: "http://www.mga.edu/",
        country: "USA",
        domain: "mga.edu",
        name: "Middle Georgia State College"
    },
    {
        web_page: "http://www.mdx.ac.uk/",
        country: "United Kingdom",
        domain: "mdx.ac.uk",
        name: "Middlesex University"
    },
    {
        web_page: "http://www.middlebury.edu/",
        country: "USA",
        domain: "middlebury.edu",
        name: "Middlebury College"
    }
]
function Login(props) {
    const DATA_TYPE = "DATA_TYPE";
    const { register, handleSubmit, errors, control } = useForm();
    const [colleges, setCollege] = useState({ repos: collegeinfo })
    const [value, setValue] = useState([])
    const dispatch = useDispatch()

    // useEffect(() => {
    //     // const apiUrl = `http://universities.hipolabs.com/search?name=middle`;
    //     const responce = fetch(collegeinfo)
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setCollege({ repos: res });
    //         });
    // }, [setCollege])
    const Handlechange = (e) => {
        setValue(e.target.checked)
    }
    const onSubmit = (data) => {
        // dispatch({ type: 'DATA_SUBMIT', data: data })
        // setData(data)
        props.history.push('/student-detail')

    };

    return (
        <div className="App">
            <BackContainer title="SIGNUP" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="col-md-12" style={{ marginTop: 60 }}>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" ref={register({
                        required: "email is require",
                        pattern: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/,
                        message: "required"
                    })} />
                    {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw"
                        ref={register({
                            required: "email is require",
                            pattern: {
                                message: "password required"
                            }
                        })} />
                    {errors.psw && <p className="errorMsg">{errors.psw.message}</p>}
                    <div class="col-md-12">
                        <button type="submit">submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}


const mapStateToProps = (state, ownProps) => {
    return {
        list: state,
    }
}

export default connect(mapStateToProps)(Login);