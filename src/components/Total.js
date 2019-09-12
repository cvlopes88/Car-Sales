import React from 'react';
import { connect } from 'react-redux';
import { updatePriceAC } from '../actions';

const Total = props => {

  
  // const [newPrice, setNewPrice] = useState('');
  // const handleChange = e => {
  //   setNewPrice(e.target.value + price);

  return (
    <div className="content">
      <h4>Total Amount: ${props.price}</h4>
    </div>
  );
};


const mapStateToProps = state => {
  console.log('totall', state)
  return {
    price: state.car.price
  };
};

export default connect(
  mapStateToProps,
  { updatePriceAC }
)(Total);

