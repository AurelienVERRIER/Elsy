import React from "react";
import '../App.css';

class Box extends React.Component {

    // constructor () {
    // super ()

    // this.state = {
    //     type: this.state.type,
    //     icon: this.state.icon,
    //     color: this.state.color,
    //     value: this.state.value,
    //     unit: this.state.unit
    // }

    // this.state = {
    //     type: "water",
    //     value: this.state.value
    //   }
    // }

    // handleChange = (e) => {
    //   this.setState({value: e.target.value})
    // }

  render () {
  
    // const type = this.state.type
    // const test = "water"
   


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
        // value={this.props.value}
        // min={this.props.rangeMin}
        // max={this.props.rangeMax}
        // onChange={this.handleChange}
        // step="any"
         />
        )}
  

      </div>
    )
  }
}

export default Box
  
  
  
  
  
  // constructor () {
  //   super ()
  //   this.state = {
  //       type: this.props.type,
  //       icon: this.props.icon,
  //       color: this.props.color,
  //       value: this.props.value,
  //       unit: this.props.unit
  //     }
  //   }
  

  

  // render() {
  
    // const { type, icon, color, value, unit } = this.state.box
    // const unit = this.state.unit
    // const isntWater = 5 

    
    // if (this.state.value = 3000) {
    // if (this.props.type="water") {

    // return (
      
    //   <div className="box col-sm3 col-6">
        
    //     <span
    //       className="material-icons" 
    //       style={{
    //         fontSize: 100, 
    //         color: this.props.color
    //       }}>
    //       {this.props.icon}
    //     </span>
            
    //     <p>
    //       {this.props.value}{this.props.unit}
    //     </p>

    //   </div>
    // )
    

    // } else {

//     return (
      
//       <div className="box col-sm3 col-6">
        
//         <span
//           className="material-icons" 
//           style={{
//             fontSize: 100, 
//             color: this.props.color
//           }}>
//           {this.props.icon}
//         </span>
            
//         <p>
//           {this.props.value}{this.props.unit}
//         </p>

//         {isntWater = 5 ? :
//         <input type="range" />
//         }
       

//       </div>
//     )
//   }

// export default Box

     {/* à mettre dans l'input après "range" min={this.props.rangeMin} max={this.props.rangeMax} */}
    //  ajouter un onChange={this.fonction} ?