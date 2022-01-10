import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css'

export const CreateTodoButton = () => {
    const {setOpenModal} = React.useContext(TodoContext);
    const onClickButton = () => {
        //openModal ? setOpenModal(false) : setOpenModal(true);
        setOpenModal(prevState => !prevState);
    };

    return (
    <button 
        className="CreateTodoButton"
        onClick={onClickButton}
    >
        +
    </button>
    );
};