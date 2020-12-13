import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {name:"Sreeni",age:"33"},
      {name:"Bhavik",age:"3"},
      {name:"Pujitha",age:"31"}
    ]
  }
  switchHandler = ()=>{
    this.setState(
        {
          persons:[
            {name:"Sreeni",age:"33"},
            {name:"Bhavik",age:"3"},
            {name:"Pujitha",age:"38"}
          ]

        }
    )
  }

  nameChangeHandler = (event)=>{
    this.setState({
          persons:[
              {name:"Sreeni",age:'33'},
              {name:"Bhavik",age:"3"},
              {name:event.target.value,age:"38"}
          ]
        }
    )
  }
  render() {
    return (
      <div className="App">
          <Person name ={this.state.persons[0].name} age="33"/>
          <Person name ={this.state.persons[1].name} age={this.state.persons[1].age}/>
          <Person change={this.nameChangeHandler} click={this.switchHandler}name ={this.state.persons[2].name} age={this.state.persons[2].age}>He is my son </Person>
        <button onClick={this.switchHandler}>ChangeState</button>
      </div>
    );
  }
}

export default App;
