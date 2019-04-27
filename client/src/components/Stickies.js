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

  componentDidUpdate(prevProps) {
    if (prevProps.stickies.stickies === this.props.stickies.stickies) {
      this.props.getStickies();
    }
  }

  render() {
    {
      if (this.props.stickies.stickies.length === 0) {
        return (
          <div>
            <p>Loading...</p>
          </div>
        );
      }
    }
    return (
      <div>
        <AddSticky />
        {this.props.stickies.stickies.map(sticky => {
          return (
            <div key={sticky._id}>
              <Sticky
                title={sticky.title}
                description={sticky.description}
                id={sticky._id}
              />
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
