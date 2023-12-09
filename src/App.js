import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import {useState} from "react";


function App() {

    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    const [editTodo, setEditTodo] = useState(null)

    const initialPassword = '12345'
    const [password, setPassword] = useState('')
    const [toggle, setToggle] = useState(false)

    const onLoginSubmit = (e) => {
        e.preventDefault()
    }

    const correctPassword = () => {
        password === initialPassword ? setToggle(true) : alert('Your password is incorrect')
        setPassword('')
    }

    return (

        <>
            {!toggle ? (

            <form onSubmit={onLoginSubmit}>
                <input type="password"
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                />

                <button type='submit' onClick={correctPassword}> Login</button>

            </form> ) :

                <div>
                    <h1> Todo List</h1>

                    <Form
                        input={input}
                        setInput={setInput}
                        todos={todos}
                        setTodos={setTodos}
                        editTodo={editTodo}
                        setEditTodo={setEditTodo}
                    />

                    <TodoList
                        todos={todos}
                        setTodos={setTodos}
                        setEditTodo={setEditTodo}
                    />
                </div>

                // : <span style={{color: 'red'}}> " Your password is incorrect " </span>
            }
        </>

    )
}


export default App;
