import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}{props.feature.price}
    </li>
  );
};



const mapStateToProps = state => {
  console.log('totallssssssss', state)
  return {
    
  };
};

export default connect(
  mapStateToProps,
  { removeFeature }
)(AddedFeature);
