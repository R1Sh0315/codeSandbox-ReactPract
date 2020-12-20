import React, { Component } from "react";
class Button extends Component {

  counterIncrement={
    count=0;
  }

  clickEvent() {
    console.log("You just click me....");
  }

  render() {
    return (
      <React.Fragment>
        <button className="style" onClick={this.clickEvent}>
          Action
        </button>
      </React.Fragment>
    );
  }
}

export default Button;