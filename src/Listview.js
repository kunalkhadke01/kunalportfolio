import React, { Component, createRef } from 'react';
import './App.css';
import CheckBox from './checkBox';
import Avatar from 'react-avatar-edit';
import { Fragment } from 'react';

class ListView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fruites: [
                { id: 1, value: "banana", isChecked: false },
                { id: 2, value: "apple", isChecked: false },
                { id: 3, value: "mango", isChecked: false },
                { id: 4, value: "grap", isChecked: false }
            ],
            currentValue: "",
            value: [],
            image: ""
        }
        this.uploadedImage = createRef(null)
        const imageUploader = createRef(null);
    }

    handleAllChecked = (event) => {
        let fruites = this.state.fruites
        fruites.forEach(fruite => fruite.isChecked = event.target.checked)
        this.setState({ fruites: fruites })
    }

    handleCheckChieldElement = (event) => {
        let fruites = this.state.fruites
        let value = [...this.state.fruites]
        value.push(this.state.currentValue)
        fruites.forEach(fruite => {
            if (fruite.value === event.target.value)
                fruite.isChecked = event.target.checked
            // console.log(event.target.value)
        })
        this.setState({ fruites: fruites })
        this.setState({ value, currentValue: event.target.value })
    }
    handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = this.uploadedImage;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
                this.setState({ image: current.src })
            }
            reader.readAsDataURL(file);
        }
        // console.log(x.result)
        // this.setState({ image: e.target.files[0].name })
    };

    // onSubmit = (event) => {
    //  event.target.value
    // }
    render() {
        const { value, products, ref } = this.props

        return (
            <Fragment>
                <div style={{ textAlign: "center" }}>
                    <div
                        style={{
                            height: "60px",
                            width: "60px",
                            // border: "2px dashed black"
                        }}
                    >
                        <img
                            ref={this.uploadedImage}
                            alt="profile picture"
                            style={{
                                width: "10%",
                                height: "10%",
                                position: "absolute"
                            }}
                        />
                        {console.log(this.uploadedImage.current)}
                    </div>
                    <input type="file" accept="image/*" onChange={this.handleImageUpload} />
                </div>
                <div className="List">
                    <h1> Check and Uncheck All Fruites</h1>
                    <input type="checkbox" onClick={this.handleAllChecked} value="checkedall" /> Check / Uncheck All
                <ul>
                        {
                            this.state.fruites.map((fruite) => {
                                return (<div>
                                    <CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...fruite} />
                                </div>
                                )
                            })
                        }
                    </ul>
                    <button style={{ backgroundColor: "lightblue", width: 100 }} onClick={(checked) => this.props.history.push({
                        pathname: "/detail",
                        state: { List: this.state.currentValue, image: this.state.image }
                    })}>Next</button>
                </div>
            </Fragment>
        );
    }
}

export default ListView