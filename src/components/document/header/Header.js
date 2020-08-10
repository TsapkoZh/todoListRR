import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './header.scss';

class Header extends Component {
  render() {
    const {
      documentHeader,
    } = this.props;

    return (
      <div className='header'>
        <div className='date'>
          «<span className='dateDay'>
            {documentHeader.date ? documentHeader.date.split('-')[2] : ''}
          </span>»
          <span className='dateMonth'>
            {documentHeader.date ? documentHeader.date.split('-')[1] : ''}
          </span>
          <span className='dateYear'>
            {documentHeader.date ? documentHeader.date.split('-')[0] : ''}
          </span>г.
        </div>

        <h1 className='title'>
          Накладная №
            <span className='invoiceNumber'>
              {documentHeader.number}
            </span>
        </h1>

        <p className='toWhom'>
          Кому
            <span className='toWhomField'>
              {documentHeader.toWhom}
            </span>
          </p>
        <p className='fromWhom'>
          От кого
            <span className='fromWhomField'>
              {documentHeader.fromWhom}
            </span></p>
      </div>
    )
  }
}

Header.propTypes = {
  documentHeader: PropTypes.shape({
    date: PropTypes.string,
    number: PropTypes.string,
    toWhom: PropTypes.string,
    fromWhom: PropTypes.string,
  }),
}

export default Header;
