import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSticky, deleteSticky, getStickies } from "../actions";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  InputGroup,
  InputGroupText,
  Input
} from "reactstrap";

class Sticky extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const sticky = {
      title: this.state.title,
      description: this.state.description
    };
    this.props.updateSticky(this.props.id, sticky);
  };

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>
              <InputGroup>
                <Input
                  name="title"
                  value={this.state.title}
                  placeholder={this.props.title}
                  onChange={this.handleChange}
                />
              </InputGroup>
            </CardTitle>
            <CardText>
              <InputGroup>
                <Input
                  name="description"
                  value={this.state.description}
                  placeholder={this.props.description}
                  onChange={this.handleChange}
                />
              </InputGroup>
            </CardText>
            <Button onClick={this.handleSubmit}>Save</Button>
            <Button onClick={e => this.props.deleteSticky(this.props.id)}>
              Delete
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stickies: state.stickies
});

export default connect(
  mapStateToProps,
  { updateSticky, deleteSticky, getStickies }
)(Sticky);
