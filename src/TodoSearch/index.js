import React from 'react';
import './TodoSearch.css';
import {TodoContext} from '../TodoContext';

export const TodoSearch = () => {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSerachValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <>
            <input 
                className='TodoSearch'
                placeholder="Busca aquí tu TODO"
                value={searchValue}
                onChange={onSerachValueChange}
            />  
        </>
    );
};