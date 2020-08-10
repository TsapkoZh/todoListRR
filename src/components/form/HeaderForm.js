import React, { Component } from 'react';

// import './form.css'

class HeaderForm extends Component {
  state = {
    formErrors: {
      date: '', 
      number: '',
      toWhom: '',
      fromWhom: '',
    },
    dateValid: false, 
    numberValid: false,
    toWhomValid: false,
    fromWhomValid: false,
    formValid: false,
  }
  
  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val},
                  () => { this.validateField(nam, val) })
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let dateValid = this.state.dateValid;
    let numberValid = this.state.numberValid;
    let toWhomValid = this.state.toWhomValid;
    let fromWhomValid = this.state.fromWhomValid;

    switch (fieldName) {
      case 'date':
        dateValid = value.length >= 8;
        fieldValidationErrors.date = dateValid ? '' : 'Введите дату*';
        break;

      case 'number':
        if (value.length >= 7) {
          numberValid = false; 
          fieldValidationErrors.number =  'Не длиннее семи символов*';
        } else if (value || !value) {
          numberValid = value >= 1;
          fieldValidationErrors.number = numberValid ? '' : 'Введите номер (больше ноля)*';
        }
        break;

      case 'toWhom':
        if (value.length >= 50) {
          toWhomValid = false;
          fieldValidationErrors.toWhom = 'Не длиннее пятидесяти символов*';
        } else if (value || !value) {
          toWhomValid = value.length >= 2;
          fieldValidationErrors.toWhom = toWhomValid ? '' : 'Не короче двух символов*';
        }
        break;

      case 'fromWhom':
        if (value.length >= 50) {
          fromWhomValid = false;
          fieldValidationErrors.fromWhom =  'Не длиннее пятидесяти символов*';
        } else if (value || !value) {
          fromWhomValid = value.length >= 2;
          fieldValidationErrors.fromWhom = fromWhomValid ? '' : 'Не короче двух символов*';
        }
        break;
    }

    this.setState({formErrors: fieldValidationErrors,
      dateValid: dateValid,
      numberValid: numberValid,
      toWhomValid: toWhomValid,
      fromWhomValid: fromWhomValid,
    }, this.validateForm);
  }

  validateForm() {
    const {
      dateValid,
      numberValid,
      toWhomValid,
      fromWhomValid,
    } = this.state;

    this.setState({formValid: 
                    dateValid && 
                    numberValid &&
                    toWhomValid &&
                    fromWhomValid
                  });
  }

  handleSubmit = event => {
    const { 
      formValid, 
      date, 
      number, 
      toWhom, 
      fromWhom
    } = this.state;

    const newDate = {
      date,
      number,
      toWhom,
      fromWhom,
    }

    event.preventDefault();
    if (formValid) {
      this.props.addDate(newDate);
    }
  }

  render() {
    const {
      formErrors,
      formValid,
      dateValid,
      numberValid,
      toWhomValid,
      fromWhomValid,
    } = this.state;

    return (
      <form className='wrapper'>
        <label className='cap'>
          <input
            name='date'
            type='date'
            onChange={this.handleChange}
					  className={dateValid ? 'entryField true' : 'entryField'}
          />
          <p className='error'>{formErrors.date}</p>

          <input 
            name='number'
            type='number'
            onChange={this.handleChange}
					  className={numberValid ? 'entryField true' : 'entryField'}
            placeholder='номер накладной:'
          />
          <p className='error'>{formErrors.number}</p>

          <input 
            name='toWhom'
            type='text'
            onChange={this.handleChange}
					  className={toWhomValid ? 'entryField true' : 'entryField'}
            placeholder='кому:'
          />
          <p className='error'>{formErrors.toWhom}</p>

          <input 
            name='fromWhom'
            type='text'
            onChange={this.handleChange}
					  className={fromWhomValid ? 'entryField true' : 'entryField'}
            placeholder='от кого:'
          />
          <p className='error'>{formErrors.fromWhom}</p>
        </label>

        <button 
          onClick={this.handleSubmit}
          className={!formValid ? 'btnWriteDownDisable' : 'btnWriteDown'}
          disabled={!formValid}
        >
          сохранить
        </button>
      </form>
    )
  }
}

export default HeaderForm;