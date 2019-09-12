import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updatePriceAC } from './actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  console.log(props)
 


  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  //   item.preventDefault();
    
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header  />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures  />
        <Total  />
      </div>
    </div>
  );
};
export default App;
