// import logo from './logo.svg';
import { Component } from "react";
import "./App.css";
import Pgone from './pg1';
// import Pgtwo from './pg2';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstname: "rabi", secondname: "jackson" },
      company: "csi",
    };
  }
  render() {
    return (
      <div className="App">
        {/* <h1>hello</h1> */}
        <h1>
          hello {this.state.name.firstname} {this.state.name.secondname}, I'm
          working at {this.state.company}
        </h1>
        <button
          onClick={() => {
            this.setState({
              name: { firstname: "Hari", secondname: "sharan" },
              company:'Vebbox',
            });
            console.log(this.state.name);
          }}
        >
          change name
        </button>
        {
        }
        <Pgone/>
        {/* <Pgtwo/> */}
      </div>
    );
  }
}

export default App;
