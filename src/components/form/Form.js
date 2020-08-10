import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderForm from './HeaderForm.js';
import GoodsForm from './GoodsForm.js';

import './form.scss'

class Form extends Component {
  render() {
  const { 
    addDate, 
    addProduct, 
    allProducts 
  } = this.props;

    return (
      <div
        className='wrapper'
      >
          <HeaderForm 
            addDate={addDate}
          />
          <GoodsForm 
            addProduct={addProduct}
            allProducts={allProducts}
          />
      </div>
    ) 
  }
}

Form.propTypes = {
  addDate: PropTypes.func,
  addProduct: PropTypes.func,
  allProducts: PropTypes.number.isRequired,
}

export default Form;