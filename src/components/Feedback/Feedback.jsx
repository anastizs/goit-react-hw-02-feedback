import React, { Component } from "react";
import ControlsBtn from "./Controls";
import "./Feedback.styled";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackHandler = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ControlsBtn
          options={Object.keys(this.state)}
          onLeaveFeedback={this.feedbackHandler}
        />
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Feedback;
