import React from "react";
import '../App.css';

class Box extends React.Component {
  render() {
    return (
      <div className="box col-sm3 col-6">
          <span
            className="material-icons" 
            style={{
              fontSize: 100, 
              color: this.props.color
            }}>
            {this.props.icon}
          </span>

          <p>
            {this.props.value}
            {this.props.unit}
          </p>

          <input type="range" min={this.props.rangeMin} max={this.props.rangeMax}/>

      </div>
    );
  }

}

export default Box