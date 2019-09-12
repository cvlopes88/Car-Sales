import React, {useState} from 'react';
import { connect } from 'react-redux';
import { buyitem } from '../actions';

const AdditionalFeature = props => {
     const [newFeauture, setNewFeature] = useState('');

  const buyitem = item => {
    item.preventDefault();
    
    props.buyitem(newFeauture);


  };

  

  return (
    <li>
      
      <button onClick={buyitem} className="button">Add</button>
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
