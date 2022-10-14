import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import './styles.scss';

TodoList.propTypes = {
    todolist: PropTypes.array,
    onTodolist: PropTypes.func,
};
TodoList.defaultProps = {
    todolist: [],
    onTodolist: null,
};

function TodoList({ todolist, onTodolist }) {
    const handleTodoClick = (todo, idx) => {
        if (!onTodolist) return;
        onTodolist(todo, idx);
    }
    return (
        <ul className='todo-list'>
            {todolist.map((todo, idx) => (
                <li key={todo.id}
                    className={className({
                        'todo-item': true,
                        completed: todo.status === 'completed'
                    })}
                    onClick={() => handleTodoClick(todo, idx)}
                >
                    {todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;