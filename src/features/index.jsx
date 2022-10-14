import React, { useState } from 'react';
import Quantityform from './quantityform/quantityform';
import TodoList from './Todo';
import TodoForm from './Todoform';


TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const inittodolist = [
        {
            id: 1,
            title: 'First 1',
            status: 'new',
        }, {
            id: 2,
            title: 'First 2',
            status: 'completed',
        }, {
            id: 3,
            title: 'First 3',
            status: 'new',
        }, {
            id: 4,
            title: 'First 4',
            status: 'new',
        },
    ]
    const [todolist, setTodolist] = useState(inittodolist);
    const [fiterstatus, setFiterStatus] = useState('all');
    const handleTodoClick = (todo, idx) => {
        const newtodolist = [...todolist];

        console.log(todo, idx);

        newtodolist[idx] = {
            ...todolist[idx],
            status: newtodolist[idx].status === 'new' ? 'completed' : 'new',
        };
        // newtodolist
        setTodolist(newtodolist);

    }
    const handleTodoClickShowALL = () => {
        setFiterStatus('all');
    }
    const handleTodoClickShowNew = () => {
        setFiterStatus('new');

    }
    const handleTodoClickShowCompleted = () => {
        setFiterStatus('completed');

    }
    const rederTodolist = todolist.filter(todo => fiterstatus === 'all' || fiterstatus === todo.status);
    // console.log(rederTodolist);
    const handleTodoFromSubmit = (values) => {
        console.log('From:', values);
        const newtodo = {
            id: todolist.length + 1,
            title: values.title,
            status: 'new',

        };

        const newTodolist = [...todolist, newtodo];
        setTodolist(newTodolist);
    };
    const handleAddtoCartSubmit = (formValues) => {
        console.log('From', formValues)
    }
    return (
        <div>
            {/* <h3>TodoForm</h3>
            <TodoForm onSubmit={handleTodoFromSubmit} /> */}
            <h3>TODo List</h3>
            <TodoList todolist={rederTodolist} onTodolist={handleTodoClick} />
            <div>
                <button onClick={handleTodoClickShowALL}>SHOW ALL</button>
                <button onClick={handleTodoClickShowNew}> new </button>
                <button onClick={handleTodoClickShowCompleted}> completed</button>

            </div>
            <h3>QuanTiTy From</h3>
            <Quantityform onSubmit={handleAddtoCartSubmit} />
        </div>
    );
}

export default TodoFeature;