import React, { Component } from 'react';
import Cardlist from './cardlist';
import { robots } from './robot';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    // console.log(event.target.value)
    this.setState({ searchfield: event.target.value })
    const filteredRobot = this.state.robots.filter(robot => {
     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase);
    })
   
  }
   
  render() {
    const filteredRobot = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase);
     })
    return (
      <div className='tc'>
        <h1>ROBOFRIEND</h1>
        <SearchBox searchChange={this.onSearchChange} />

        <Cardlist robots={this.state.robots} />

      </div>
    );
  }
}

export default App;
