import React, { Component } from "react";
import Sticky from "./Sticky";
import { connect } from "react-redux";
import { getStickies } from "../actions";

class Stickies extends Component {
  constructor() {
    super();
    this.state = {
      stickies: []
    };
  }

  componentDidMount() {
    this.props.getStickies();
  }

  render() {
    return (
      <div>
        {this.props.stickies.stickies.map(sticky => {
          return (
            <div key={sticky._id}>
              <p>{sticky.title}</p>
              <p>{sticky.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stickies: state.stickies
});

export default connect(
  mapStateToProps,
  { getStickies }
)(Stickies);
