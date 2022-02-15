import React, { Component } from 'react'

class Example extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: "",
            count: 0,
            option: ""
        }
    }

    InputChange = (e) => {
        this.setState({
            text: e.target.value
        })
        //console.log(e.target.value)
    }

    PlusHandler = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    MinusHandler = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    ChangeHandler = (e) => {
        //console.log(e.target.value)
        this.setState({
            option: e.target.value
        })
    }
    
  render() {
      const {text,count,option} = this.state;
    return (
      <div>
          {/* <p>{text}</p>
          <input type="text" onChange={this.InputChange}></input>

          <select onChange={this.ChangeHandler}>
              <option>Online</option>
              <option>Offline</option>
          </select>

          <h4>{option}</h4>
          <h5>Count: {count}</h5>
          <button onClick={this.MinusHandler}>-</button>
          <button onClick={this.PlusHandler}>+</button> */}
      </div>
    )
  }
}

export default Example;