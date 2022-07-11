import React from "react";
import './App.css';
import './styles/global.css';
import Box from './components/Box';

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
          
          {/* Water Box */}
          <Box 
          icon="local_drink" 
          color="#3A85FF" 
          value="1.5" 
          unit="L" />
          
          {/* Steps Box */}
          <Box 
          icon="directions_walk favorite wb_sunny"
          color="black red yellow"
          value = "3000 120 -10"
          unit = " 'steps' 'bpm' '°C' " />
          
          {/* Hearth Box */}
          <Box 
          icon="directions_walk favorite wb_sunny"
          color="black red yellow"
          value = "3000 120 -10"
          unit = " 'steps' 'bpm' '°C' " />
          
          
          {/* Temperature Box */}
          <Box 
          icon="directions_walk favorite wb_sunny"
          color="black red yellow"
          value = "3000 120 -10"
          unit = " 'steps' 'bpm' '°C' " />
        
        </div>
      </div>
    );
  }
}

export default App;




