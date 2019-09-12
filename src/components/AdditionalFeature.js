import React, {useState} from 'react';
import { connect } from 'react-redux';

const AdditionalFeature = props => {


  

  return (
    <li>
      
      <button className="button">Add</button>
      
    </li>
  );
};


const mapStateToProps = state => {
  console.log('addddddeerrr', state)
  return {
    state
  };
};

export default connect(
  mapStateToProps,
 
)(AdditionalFeature);
