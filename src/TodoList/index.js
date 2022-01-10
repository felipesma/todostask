import React from 'react';
import './TodoList.css';

export const TodoList = (props) => (
    <section>
        <ul>
            {props.children}
        </ul>
    </section>
)