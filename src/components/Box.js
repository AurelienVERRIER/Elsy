import React from "react";
import '../App.css';

class Box extends React.Component {
  render() {
    return (
      <div className="box col-sm3 col-6">
          <span className="material-icons" style={{fontSize:100, color:"this.prop.value"}}>
            this.props.icon
          </span>
          <p>
            {this.props.value}
            {this.props.unit}
          </p>
      </div>
    );
  }

}

export default Box