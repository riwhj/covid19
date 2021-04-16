import logo from './logo.svg';
import './App.css';
import React from 'react';
import Covid from './constructor/Covid';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {name:{}}
  }


  componentDidMount() {
    console.log("DidMount");
    var self = this;
    axios.get("https://covid19.th-stat.com/api/open/today").then(function(response){
    console.log(response.data);
    self.setState({name: response.data});
    },
    function(error){
    console.log(error);
    })
    }

  // render() {
  //   return (
  //     <div>
  //       <h1>Hello, world!</h1>
  //       <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
  //     </div>
  //   );
  // }


  render() {
    console.log("rebder")
  return (
    <div className="App">
      <header className="App-header">

        <Covid data={this.state.name}/>
        
      </header>
    </div>
  );
}
}

export default App;
