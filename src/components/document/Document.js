import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './header/Header.js';
import ListOfGoods from './listOfGoods/ListOfGoods.js'
import Footer from './footer/Footer.js'

import './document.scss'

class Document extends Component {
  clearLS = () => {
    localStorage.clear();
    window.location.reload(false);
  }

  render() {
    const {
      documentHeader,
      products,
    } = this.props;

    return (
      <div className='wrapper'>
        <div className='document'>
          <Header 
            documentHeader={documentHeader}
          />
          <ListOfGoods
            products={products}
          />
          <Footer />
        </div>
        <button 
          onClick={this.clearLS}
          className='btnClear'
        >
          очистить
        </button>
      </div>
    ) 
  }
}

Document.propTypes = {
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

export default Document;