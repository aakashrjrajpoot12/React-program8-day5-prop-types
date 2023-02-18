import React from 'react';
import PropTypes from 'prop-types';
export default class UserComponent extends React.Component{
  render(){
    return(
      <>
      <h2>PropTypes Demo</h2>
      <h4>Check the warning message in the java script console</h4>
      <p>Name: {this.props.name}</p>
      <p>Projects: {this.props.projects}</p>
      <p>Age: {this.props.age}</p>

      </>
    ):
  }
}
