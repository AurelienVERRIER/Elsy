import React from "react";
import '../App.css';

class Box extends React.Component {


    handleChange = (e) => {
      this.setState({value: e.target.value})
    }

    render () {
  
   


    return (
      <div className="box col-sm-3 col-6">
        <span
          className="material-icons"
          style={{
            fontSize: 100,
            color: this.props.color
          }}
        >
          {this.props.icon}
        </span>
        
        <p>{this.props.value}{this.props.unit}</p>

        
        
        { this.props.type != "water" && (
        <input
        type="range"
        defaultValue={this.props.value}
        min={this.props.rangeMin}
        max={this.props.rangeMax}
        onChange={this.props.onChange}
        />
        )}

        {/* { this.props.type = "steps" && (
        <input
        type="range"
        defaultValue={this.props.value}
        min={this.props.rangeMin}
        max={this.props.rangeMax}
        onChange={this.props.onChange}
        step="1000"
        />
        )} */}
  

      </div>
    )
  }
}

export default Box