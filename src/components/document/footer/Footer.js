import React, { Component } from 'react';

import './footer.scss';

class Footer extends Component {
  render() {
    return(
      <div className='footer'>
        М.П.
        <div className='signature'>
          Сдал <span className='line'>(расшифровка подписи)</span>
        </div>

        <div className='signature'>
          Принял <span className='line'>(расшифровка подписи)</span>
        </div>
      </div>
    )
  }
}

export default Footer;
