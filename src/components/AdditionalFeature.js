import React, {useState} from 'react';
import { connect } from 'react-redux';
import { buyitem, BUY_ITEM } from '../actions';

const AdditionalFeature = props => {


  

  return (
    <li>
      
      <button  className="button">Add</button>
      <li>{props.name}  {props.price}</li>
      
    </li>
  );
};


const mapStateToProps = state => {
 
  return {
   
  };
};

export default connect(
  mapStateToProps,
{buyitem}
)(AdditionalFeature);
