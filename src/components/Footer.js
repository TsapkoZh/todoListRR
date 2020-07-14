import React, { Component }  from 'react';

import Button from './Button';

import './style/footer.css'

const filtersList = [
    'all',
    'active',
    'completed',
];

class Footer extends Component {
    render () {
        const { 
            filter,
            clearCompleted,
            allTasks,
            itemsLeft,
            onFilterChanged,
        } = this.props;
   
        return (
            <div className={allTasks > 0 ? 'show footer' : 'footer'} >
                <span className='todoCount'>{itemsLeft} items left</span>

                <div className='filterBtns'>
                    {filtersList.map(filterItem => (
                        <Button 
                            key={filterItem}
                            className={filter === filterItem  ? 'filterSwitchBtn selected' : 'filterSwitchBtn'} 
                            cbData={filterItem} 
                            onClick={onFilterChanged}
                        >
                            {filterItem}
                        </Button>
                    ))}
                </div>

                <button 
                    onClick={clearCompleted}
                    className='clearCompleted'
                >
                    clear completed
                </button>
            </div>
        )
    }
}

export default Footer;