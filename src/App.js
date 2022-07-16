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
    water: 1.5,
    heart: 120,
    temperature: -10,
    steps: 3000
  }}

  // si temperature > 20°, 1 degré = 0,02 l de plus
  // si bpm > 120, 1 bpm = 0,0008 l de plus
  // si steps > 10 000, 1 step = 0,000002 l de plus

  // 1.5 + 0.02*this.state.temperature + 0.0008*this.state.heart + 0.000002*this.state.steps

  onHeartChange = (e) => {
    this.setState({heart: e.target.value})
  }

  onStepsChange = (e) => {
    this.setState({steps: e.target.value})
  }

  onTemperatureChange = (e) => {
    this.setState({temperature: e.target.value})
  }

  if (this.state.temperature > 20) {
    const temperatureOver = (this.state.temperature-20) * 0.02
  } else { 
    const temperatureOver = 0
  }

  if (this.state.heart > 120) {
    const heartOver = (this.state.heart-120) * 0.00008
  } else { 
    const heartOver = 0
  }

  if (this.state.temperature > 20) {
    const stepsOver = (this.state.steps-10000) * 0.000002
  } else { 
    const stepsOver = 0
  }

  // const heartOver = this.state.heart * 0.0008
  // const stepsOver = this.state.steps * 0.000002
  
  calculateWater = () => {
    this.setState({water: 1.5 + {temperatureOver} + {heartOver} + {stepsOver}})
  }


  render() {    

    return (
      <div className="container-fluid">
        
        <div className="row">
          

          <Box
            type="water" 
            icon="local_drink" 
            color="#3A85FF" 
            value={this.calculateWater}
            // value={this.state.water} 
            unit=" L"
          />

          <Box 
            type="steps"
            icon="directions_walk"
            color="black"
            value ={this.state.steps}
            unit = " steps"
            rangeMin = {stepsMin}
            rangeMax = {stepsMax}
            onChange = {this.onStepsChange}
          />
 
          <Box 
            type="heart"
            icon="favorite"
            color="red"
            value ={this.state.heart}
            unit =" bpm"
            rangeMin = {heartMin}
            rangeMax = {heartMax}
            onChange = {this.onHeartChange}
          />

          <Box
            type="temperature"
            icon="wb_sunny"
            color="yellow"
            value ={this.state.temperature}
            unit ="°C"
            rangeMin = {tempsMin}
            rangeMax = {tempsMax}
            onChange = {this.onTemperatureChange}
          />

        </div>
      </div>
    );
  }
}

export default App;




