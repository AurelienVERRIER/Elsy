import React from "react";
import './App.css';

const tempsMin = -20
const tempsMAx = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <p>Heart : 80</p>
          <p>Temperature : -20</p>
          <p>Steps : 0</p>
        </div>
      </div>
    );
  }
}

export default App;




