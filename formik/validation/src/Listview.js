import React, { Component } from 'react'
import './App.css'
import CheckBox from './checkBox'

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
            currentvalue: ""
        }
    }

    handleAllChecked = (event) => {
        let fruites = this.state.fruites
        fruites.forEach(fruite => fruite.isChecked = event.target.checked)
        this.setState({ fruites: fruites })
    }

    handleCheckChieldElement = (event) => {
        let fruites = this.state.fruites
        fruites.forEach((fruite) => {
            if (fruite.value === event.target.value) {
                fruite.isChecked = event.target.checked
            }
        })
        // console.log(fruites)
        const value = fruites.filter(({ isChecked }) => {
            return isChecked == true
        }
        )
        console.log(value)
        this.setState({ fruites: fruites })
        this.setState({ currentvalue: value })
    }

    onSubmit = () => {
        console.log(this.state.currentvalue)
    }
    render() {
        const { value } = this.props
        return (
            <div className="List">
                <h1> Check and Uncheck All Fruites</h1>
                <input type="checkbox" onClick={this.handleAllChecked} value="checkedall" /> Check / Uncheck All
                <ul>
                    {console.log("hello")}
                    {
                        this.state.fruites.map((fruite, index) => {
                            return (<div>
                                <CheckBox handleCheckChieldElement={this.handleCheckChieldElement} {...fruite} />
                            </div>
                            )
                        })
                    }
                </ul>
                <button style={{ backgroundColor: "lightblue", width: 100 }} onClick={() => this.onSubmit()}>Next</button>
                {/* {this.state.currentvalue} */}
            </div>
        );
    }
}

export default ListView