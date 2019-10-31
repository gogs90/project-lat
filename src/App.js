import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todo: '',
      items: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items   : [...this.state.items, this.state.todo],
      todo    : ''
    })
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      todo: event.target.value
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todo} onChange={this.handleChange}/>
          <button>add</button>
        </form>

        <List data = {this.state.items} />
      </div>
    )
  }
}


export default App;