import React, { Component } from "react";
import { connect } from "react-redux";
import { createSticky } from "../actions";

class AddSticky extends Component {
  constructor() {
    super();
    this.state = {
      sticky: {
        title: "",
        description: ""
      }
    };
  }

  render() {
    return (
      <div>
        <button onClick={e => this.props.createSticky(this.state.sticky)}>
          +
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stickies: state.stickies
});

export default connect(
  mapStateToProps,
  { createSticky }
)(AddSticky);
