import React, {useEffect} from 'react';

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map(todo =>
            todo.id === id ? {title, id, completed} : todo
        )
        setTodos(newTodo)
        setEditTodo('')
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (input !== '') {
            if (!editTodo) {
                setTodos([...todos, {id: crypto.randomUUID(), title: input, completed: false}])
                setInput('')
            } else {
                updateTodo(input, editTodo.id, editTodo.completed)
            }
        }
    }

    useEffect(() => {
        editTodo ? setInput(editTodo.title) : setInput('')
    }, [setInput, editTodo]);

    return (
        <form onSubmit={onFormSubmit}>

            <input
                type="text"
                placeholder='Enter new task...'
                value={input}
                onChange={e => setInput(e.target.value)}
            />

            <button> {editTodo ? 'Ok' : 'Add'}</button>

        </form>
    );
};

export default Form;