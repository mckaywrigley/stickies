import React, { Component } from "react";
import Sticky from "./Sticky";
import { connect } from "react-redux";
import { getStickies } from "../actions";
import AddSticky from "./AddSticky";

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
        <AddSticky />
        {this.props.stickies.stickies.map(sticky => {
          return (
            <div key={sticky._id}>
              <Sticky title={sticky.title} description={sticky.description} />
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
