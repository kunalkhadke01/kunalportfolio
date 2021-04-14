import React, { useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Avatar from '@material-ui/core/Avatar';
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
const collegeinfo = [
    {
        "state-province": null,
        "name": "Middlebury College",
        "country": "United States",
        "alpha_two_code": "US",
        "domains": [
            "middlebury.edu"
        ],
        "web_pages": [
            "http://www.middlebury.edu/"
        ]
    },
    {
        "state-province": null,
        "name": "American University of Middle East",
        "country": "Kuwait",
        "alpha_two_code": "KW",
        "domains": [
            "aum.edu.kw"
        ],
        "web_pages": [
            "http://www.aum.edu.kw/"
        ]
    },
    {
        "state-province": null,
        "name": "American University of Middle East",
        "country": "Kuwait",
        "alpha_two_code": "KW",
        "domains": [
            "aum.edu.kw"
        ],
        "web_pages": [
            "http://www.aum.edu.kw/"
        ]
    },
    {
        "state-province": null,
        "name": "Middle Tennessee State University",
        "country": "United States",
        "alpha_two_code": "US",
        "domains": [
            "mtsu.edu"
        ],
        "web_pages": [
            "http://www.mtsu.edu/"
        ]
    },
    {
        "state-province": null,
        "name": "Middle East Technical University",
        "country": "Turkey",
        "alpha_two_code": "TR",
        "domains": [
            "metu.edu.tr"
        ],
        "web_pages": [
            "http://www.metu.edu.tr/"
        ]
    },
    {
        "state-province": null,
        "name": "Middle East University",
        "country": "Jordan",
        "alpha_two_code": "JO",
        "domains": [
            "meu.edu.jo"
        ],
        "web_pages": [
            "http://www.meu.edu.jo/"
        ]
    },
    {
        "state-province": null,
        "name": "Middle Georgia State College",
        "country": "United States",
        "alpha_two_code": "US",
        "domains": [
            "mga.edu"
        ],
        "web_pages": [
            "http://www.mga.edu/"
        ]
    },
    {
        "state-province": null,
        "name": "Middlesex University",
        "country": "United Kingdom",
        "alpha_two_code": "GB",
        "domains": [
            "mdx.ac.uk"
        ],
        "web_pages": [
            "http://www.mdx.ac.uk/"
        ]
    },
    {
        "state-province": null,
        "name": "Middlesex County College",
        "country": "United States",
        "alpha_two_code": "US",
        "domains": [
            "middlesexcc.edu"
        ],
        "web_pages": [
            "http://www.middlesexcc.edu"
        ]
    },
    {
        "state-province": null,
        "name": "Middlesex Community College",
        "country": "United States",
        "alpha_two_code": "US",
        "domains": [
            "middlesex.mass.edu"
        ],
        "web_pages": [
            "http://www.middlesex.mass.edu"
        ]
    }
]
function UpdateForm(props) {
    const { register, handleSubmit, errors, control } = useForm({
        defaultValues: props.history.location.state
    });
    const [colleges, setCollege] = useState({ repos: collegeinfo })
    const dispatch = useDispatch()
    console.log(props.history.location.state)
    const [imageUrl, setImage] = useState("")

    console.log(props.list.usersList.state)

    console.log(imageUrl)

    const getBase64 = (cb) => {
        let file = props.history.location.state.img[0]
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
    const onSubmit = (data) => {
        dispatch({ type: 'DATA_SUBMIT', data: data })
        props.history.push("/")
        alert("form is submited")

    };
    return (
        <div className="App">
            <BackContainer title="UPDATE INFORMATION" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Avatar style={{ marginTop: 60, marginLeft: "40%", width: "80px", height: "80px" }}>
                    <img src={imageUrl} name="img" type="image" style={{ width: "60px", height: "60px" }} />
                </Avatar>
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
                            return option.name || option

                        }
                        }
                        getOptionSelected={(option: option) => {
                            const value = option.name
                            return value
                        }}
                        renderInput={(params) =>
                            <TextField
                                {...params}
                                variant="outlined"
                                type="text"
                                name="college"
                                inputRef={register}
                            />}
                        defaultValue={props.history.location.state.college}
                    />
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
                    <button type="submit">Update</button>
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

export default connect(mapStateToProps)(UpdateForm);