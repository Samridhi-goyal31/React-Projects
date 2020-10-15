import React, { useState } from 'react'
import './todo.css'
const TodoList = () => {
    const initial=''
    const [todo, setTodoVal] = useState(initial)
    const [todos, setTodos] = useState([])
    const handleChange = e => {
        setTodoVal(e.target.value)
    }
    const AddTodo=()=>{
        setTodos([...todos,
            {
                id:todo.length+1,
                value:todo,
                done:false 
            }
        ])
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (todo==='')return;
        AddTodo();
        setTodoVal(initial);
    }
    const deleteItem = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
      };
    const handleDone = todoId => {
       const updateTodo=todos.map(todo=>{
           return todoId===todo.id ? {...todo,done:!todo.done}:todo; 
       });
       setTodos(updateTodo)
    }
    return (
        <div>
            <h1 className='heading'>ToDo-List</h1>
            <header className='head'>
                <label className='lab'>Add-items:</label>
                <form className='form' onSubmit={handleSubmit}>
                    <input type='text' id='todo' value={todo} onChange={handleChange}
                        className='input-text' />
                    <button className="add-btn">+</button>
                </form>
            </header>
            <div className='todos'>
                {
                     todos.map(todo => (
                        <div className='container' key={todo.value} id={todo.id}>
                            <li className={todo.done ? 'done' : 'not-done'} onDoubleClick={()=>handleDone(todo.id)}>
                                {todo.value} </li>
                            <button className='Delete-btn' onClick={()=>deleteItem(todo.id)}> Del </button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default TodoList

