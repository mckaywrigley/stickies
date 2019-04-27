import React, { Component } from "react";
import { connect } from "react-redux";
import { createSticky } from "../actions";

class AddSticky extends Component {
  render() {
    return (
      <div>
        <h2>Sticky Form</h2>
        <button onClick={e => this.props.createSticky()}>+</button>
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
