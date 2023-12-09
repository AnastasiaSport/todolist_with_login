import React from 'react';

const TodoList = ({todos, setTodos, setEditTodo}) => {

    console.log(todos)

    const handleDelete = ({id}) => {
        setTodos(todos.filter(todo => id !== todo.id))
    }

    const handleComplete = (todo) => {
        setTodos(todos.map(el => el.id === todo.id ? {...el, completed: !el.completed} : el))
    }

    const handleEdit = (todo) => {
        const findTodo = todos.find(el => el.id === todo.id)
        setEditTodo(findTodo)
    }

    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>
                    <span style={todo.completed ? {
                        textDecoration: 'line-through',
                        color: 'red'
                    } : {}}> {todo.title}</span>

                    <button onClick={() => handleComplete(todo)}> Completed</button>
                    <button onClick={() => handleEdit(todo)}> Edit</button>
                    <button onClick={() => handleDelete(todo)}> Delete</button>
                </div>
            )}

        </div>
    );
};

export default TodoList;