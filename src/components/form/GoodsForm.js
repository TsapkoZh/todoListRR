import React, { Component } from 'react';

// import './form.css'

class GoodsForm extends Component {
  state = {
    formErrors: {
      nameProduct: '', 
      quantity: '',
      price: '',
    },
    nameProductValid: false, 
    quantityValid: false,
    priceValid: false,
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val},
                  () => { this.validateField(nam, val) })
  }

  validateField = (fieldName, value)  => {
    let fieldValidationErrors = this.state.formErrors;
    let nameProductValid = this.state.nameProductValid;
    let quantityValid = this.state.quantityValid;
    let priceValid = this.state.priceValid;

    switch (fieldName) {
      case 'nameProduct':
        if (value.length > 20) {
          nameProductValid = false
        fieldValidationErrors.nameProduct = 'Не длиннее двадцати символов*';
        } else if (value || !value) {
          nameProductValid = value.length >= 1;
          fieldValidationErrors.nameProduct = nameProductValid ? '' : 'Введите наименование товара*';
        }
        break;

      case 'quantity':
        if (value.length > 8) {
          quantityValid = false;
          fieldValidationErrors.quantity = 'Не длиннее восьми символов*';
        } else if (value || !value) {
          quantityValid = value > 0;
          fieldValidationErrors.quantity = quantityValid ? '' : 'Введите количество*';
        }
        break;

      case 'price':
        const f = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );

        if (value.length > 8) {
          priceValid = false;
          fieldValidationErrors.price = 'Не длиннее восьми символов*';
        } else if (f(value) > 2) {
          priceValid = false;
          fieldValidationErrors.price = 'Не больше двух знаков после запятой*';
        } else if (value || !value) {
          priceValid = value > 0;
          fieldValidationErrors.price = priceValid ? '' : 'Введите цену*';
        }
        break;

      default:
        break;
    }

    this.setState({formErrors: fieldValidationErrors,
      nameProductValid: nameProductValid,
      quantityValid: quantityValid,
      priceValid: priceValid,
    }, this.validateForm);
  }

  validateForm() {
    const {
      nameProductValid,
      quantityValid,
      priceValid,
    } = this.state;

    this.setState({formValid: 
                    nameProductValid && 
                    quantityValid &&
                    priceValid
                  });
  }

  handleSubmit = event => {
    const {
      nameProduct,
      quantity,
      price,
    } = this.state;

    const newProduct = {
      id: Date.now().toString(), 
      nameProduct,
      quantity,
      price,
    };

    event.preventDefault();
    this.props.addProduct(newProduct);
		event.currentTarget.value = '';
  }

  render() {
    const {
      formErrors,
      formValid,
      nameProductValid,
      quantityValid,
      priceValid,
    } = this.state;

    const { allProducts } = this.props;

    return (
      <form 
        onSubmit={this.handleSubmit}
        className='wrapper'
      >
        <label className='cap capBorder'>
          <input
            name='nameProduct'
            type='text'
            onChange={this.handleChange}
            className={nameProductValid ? 'entryField true' : 'entryField'}
            placeholder='наименование товара:'
          />
          <p className='error'>{formErrors.nameProduct}</p>

          <input
            name='quantity'
            type='number'
            onChange={this.handleChange}
            className={quantityValid ? 'entryField true' : 'entryField'}
            placeholder='количество:'
          />
          <p className='error'>{formErrors.quantity}</p>

          <input 
            name='price'
            type='number'
            onChange={this.handleChange}
            step='0.01' 
            min='0' 
            className={priceValid ? 'entryField true' : 'entryField'}
            placeholder='цена: 0,00р.'
          />
          <p className='error'>{formErrors.price}</p>
        </label>

        <button 
          onClick={this.handleSubmit}
          disabled={!formValid || allProducts > 19}
          className={!formValid || allProducts > 19 ? 'btnWriteDownDisable' : 'btnWriteDown'}
        >
          добавить товар
        </button>
        <p className={allProducts > 19 ? 'error errorBtn' : 'show'}>
          Не больше двадцати наименований*
        </p>
      </form>
    )
  }
}

export default GoodsForm;