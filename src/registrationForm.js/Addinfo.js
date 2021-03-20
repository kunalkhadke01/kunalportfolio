import React, { useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import Autocomplete from '@material-ui/lab/Autocomplete';
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

function Users(props) {
    const DATA_TYPE = "DATA_TYPE";
    const { register, handleSubmit, errors, control } = useForm();
    const [colleges, setCollege] = useState({ repos: null })
    const dispatch = useDispatch()

    const handlechange = async (e) => {
        const apiUrl = `http://universities.hipolabs.com/search?name=${e.target.value}`;
        const responce = await fetch(apiUrl)
            .then((res) => res.json())
            .then((repos) => {
                setCollege({ repos: repos });
            });

    }
    // console.log(colleges.repos ? colleges.repos.name : "")
    const onSubmit = (data) => {
        dispatch({ type: 'DATA_SUBMIT', data: data })
        // setData(data)
        props.history.push('/student-detail')

    };
    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="col-md-12">
                    <label>name</label>
                    <input
                        type="text"
                        name="name"
                        ref={register({
                            required: 'name is required.',
                            pattern: {
                                message: 'name is not valid.'
                            }
                        })}
                    />
                    {errors.name && <p className="errorMsg">{errors.name.message}</p>}
                    <label>Date Of Birth</label>
                    <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        ref={register({
                            required: 'birthday is required.',
                            pattern: {
                                message: 'birthday is not valid.'
                            }
                        })}
                    />

                    <label>Address</label>
                    <input
                        type="text"
                        name="Address"
                        ref={register({
                            required: 'Address is required.',
                            pattern: {
                                message: 'Address is not valid.'
                            }
                        })}
                    />
                    {errors.Address && <p className="errorMsg">{errors.Address.message}</p>}

                    <label for="gender">Choose your gender:</label>
                    <select
                        name="gender"
                        id="gender"
                        ref={register({
                            required: 'gender is required.',
                            pattern: {
                                message: 'gender is not valid.'
                            }
                        })}
                    >
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select>

                </div>



                <div class="col-md-12">
                    {console.log(colleges)}
                    <Controller
                        name="country"
                        as={Autocomplete}
                        options={colleges}
                        getOptionLabel={(option) => {
                            console.log(option)
                            return option ? option.repos.name : " "
                        }
                        }
                        style={{ width: 300 }}
                        renderInput={(params) =>
                            <input
                                {...params}
                                type="search"
                                list="browsers"
                                ref={register}
                            />}
                        onChange={handlechange}
                        control={control}
                        defaultValue={null}
                    />
                    <label>college</label>
                    {/* <Autocomplete
                        id="combo-box-demo"
                        name="search"
                        onChange={handlechange}
                        options={colleges ? colleges.repos : ""}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                    /> */}
                    <input
                        type="search"
                        list="browsers"
                        name="college"
                        onChange={handlechange}
                        // options={colleges.repos ? colleges.repos.name : ""}
                        ref={register({
                            required: 'college is required.',
                        })
                        }
                    />
                    {/* {colleges.repos && colleges.repos.map(college => {
                        console.log(college)
                        return (
                            <ul>
                                <li>{college.name}</li>
                            </ul>
                        )
                    })} */}
                    {errors.college && (
                        <p className="errorMsg">{errors.college.message}</p>
                    )}
                </div>
                <div class="col-md-12">
                    <label>Hobbies</label>
                    <input
                        type="text"
                        name="hobbies"
                        ref={register({
                            required: 'hobbies is required.',
                            pattern: {
                                message: 'hobbies is not valid.'
                            }
                        })}
                    />
                    {errors.hobbies && <p className="errorMsg">{errors.hobbies.message}</p>}
                </div>
                <div class="col-md-12">
                    <button type="submit">Create</button>
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

export default connect(mapStateToProps)(Users);