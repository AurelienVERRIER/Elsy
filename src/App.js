import React from "react";
import './App.css';
import './styles/global.css';
import Box from './components/Box';

const tempsMin = -20
const tempsMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  constructor () {
  super()
  this.state = {
    water: 0,
    heart: 120,
    temperature: -10,
    steps: 3000
  }}

  render() {
    return (
      <div className="container-fluid">
        
        <div className="row">
          
          <Box  
            icon="local_drink" 
            color="#3A85FF" 
            value={this.state.water} 
            unit=" L"
          />

          <Box 
            icon="directions_walk"
            color="black"
            value ={this.state.steps}
            unit = " steps"
            rangeMin = {stepsMin}
            rangeMax = {stepsMax}
          />
 
          <Box 
            icon="favorite"
            color="red"
            value ={this.state.heart}
            unit =" bpm"
            rangeMin = {heartMin}
            rangeMax = {heartMax}
          />

          <div>
            <Box 
              icon="wb_sunny"
              color="yellow"
              value ={this.state.temperature}
              unit ="°C"
              rangeMin = {tempsMin}
              rangeMax = {tempsMax}
            />
            
          </div>

        </div>
      </div>
    );
  }
}

export default App;




