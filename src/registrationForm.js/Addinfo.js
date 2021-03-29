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
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

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
function Users(props) {
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
                    <label>college</label>
                    <Autocomplete
                        name="college"
                        options={colleges.repos}
                        getOptionLabel={(option) => {
                            console.log(option)
                            return option.name

                        }
                        }
                        getOptionSelected={(option: option) => {
                            const value = option.name
                            return value
                        }}
                        renderInput={(params) =>
                            <TextField
                                {...params}
                                // {...console.log(params.inputProps.value)}
                                variant="outlined"
                                type="text"
                                name="college"
                                inputRef={register}

                            />}
                    />
                    {errors.college && (
                        <p className="errorMsg">{errors.college.message}</p>
                    )}
                </div>



                <div class="col-md-12">
                    <label>Hobbies</label>
                    {console.log(value)}
                    <Autocomplete
                        multiple
                        name={`hobbies[${value}]`}
                        options={top100Films}
                        disableCloseOnSelect
                        getOptionLabel={option => option.title}

                        renderOption={(option, { selected }) => {
                            return (
                                <React.Fragment>
                                    <Checkbox
                                        name="hobbies"
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                        onChange={(e) => setValue([option].filter((obj, index) => {
                                            return [option].indexOf(obj) == e.target.value
                                        }))}
                                    />
                                    {option.title}
                                </React.Fragment>
                            );
                        }}
                        renderInput={params => (
                            <TextField
                                {...params}
                                {...console.log(params)}
                                value={value}
                                name="hobbies[ ]"
                                variant="outlined"
                                inputRef={register}
                                placeholder="Favorites"
                                fullWidth
                            />
                        )}
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