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
            currentValue: "",
            value: []
        }
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

    // onSubmit = (event) => {
    //  event.target.value
    // }
    render() {
        const { value, products } = this.props

        return (
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
                    state: this.state.currentValue
                })}>Next</button>
            </div>
        );
    }
}

export default ListView