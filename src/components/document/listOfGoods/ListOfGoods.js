import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Goods from './Goods.js'

import './listOfGoods.scss'

class ListOfGoods extends Component {

  sum = arr => { 
    return arr.reduce((partial_sum, a) => partial_sum + a, 0) 
  }

  render() {
    const { products } = this.props;
    const quantity = products.map(p => Number(p.quantity))
    const price = products.map(p => Number(p.price))

    return(
      <div>
        <table className='tableHeader'>
          <tbody>
            <tr>
              <td className='tableCell'>
                №<br />
                п/п
              </td>

              <td className='tableCell'>
                Наименование товара
              </td>

              <td className='tableCell'>
                Кол-во
              </td>

              <td className='tableCell'>
                Цена<br />
                руб.,коп.
              </td>

              <td className='tableCell right'>
                Сумма<br />
                руб.,коп.
              </td>
            </tr>

            {products.map(({id, nameProduct, quantity, price}, index) => (
              <Goods 
                key={id}
                index={index}
                nameProduct={nameProduct}
                quantity={quantity}
                price={price}
              />
              ))
            }
            <tr>
              <td className='tableCell right tableCellTotal'></td>

              <td className='tableCell tableCellTotal'>
                Итого . . .
              </td>

              <td className='tableCell'>
                {this.sum(quantity)}
              </td>

              <td className='tableCell'>
                {this.sum(price)}
              </td>

              <td className='tableCell right'>
                {this.sum(price) * this.sum(quantity)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ListOfGoods.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    nameProduct: PropTypes.string,
    quantity: PropTypes.string,
    price: PropTypes.string,
  })),
}

export default ListOfGoods;