import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Form from './form/Form.js';
import Document from './document/Document.js';

import { addDate } from '../redux/documentHeader/actions.js';
import { addProduct } from '../redux/product/actions.js';

import './fillingForm.scss';

class FillingForm extends Component {
  render() {
    const { 
      addDate, 
      addProduct, 
      documentHeader, 
      products, 
      allProducts, 
    } = this.props;

    return (
      <div className='fillingForm'> 
        <Form 
          addDate={addDate}
          addProduct={addProduct}
          allProducts={allProducts}
        />
        <Document 
          documentHeader={documentHeader}
          products={products}
        />
      </div>
    ) 
  }
}

const mapStateToProps = state => ({
  documentHeader: state.documentHeader,
  products: state.products,
  allProducts: state.products.length,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addDate,
    addProduct,
  }, dispatch);
  
  FillingForm.propTypes = {
    addDate: PropTypes.func,
    addProduct: PropTypes.func,
	  allProducts: PropTypes.number.isRequired,
    documentHeader: PropTypes.shape({
      date: PropTypes.string,
      number: PropTypes.string,
      toWhom: PropTypes.string,
      fromWhom: PropTypes.string,
    }),
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      nameProduct: PropTypes.string,
      quantity: PropTypes.string,
      price: PropTypes.string,
    })),
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(FillingForm);
