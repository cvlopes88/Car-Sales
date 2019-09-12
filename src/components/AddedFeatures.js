import React from 'react';
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';


  // const removeFeature = item => {
  //   props.state.removeFeature(item)
  // };

const AddedFeatures = props => {
  console.log('feauttttt', props)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.state.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={removeFeature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};


const mapStateToProps = state => {
  console.log('addddddssssssssss', state)
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  {  }
)(AddedFeatures);