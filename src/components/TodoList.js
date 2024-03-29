import React, {useState} from 'react'
import Todo from './Todo';
import TodoForms from './TodoForms'

export default function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) =>{

        if(!todo.text || /^\s*$/.test(todo.text))
        {
            return;
        }

        const newsTodo = [todo, ...todos];
        setTodos(newsTodo);
        //console.log(todo, ...todos);
        //todos = all todo tasks inside
    };

    const completeTodo = (id) =>{

        let updateTodos = todos.map((todo) =>{
            if(todo.id === id)
            {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updateTodos);
    };

    const updateTodo = (todoId, newValue) =>
    {
        if(!newValue.text || /^\s*$/.test(newValue.text))
        {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue :item)));     

    }

    const removeTodo = (id) =>
    {
        const remainArr_afterRemove = [...todos].filter(todo => todo.id !== id)

        setTodos(remainArr_afterRemove)
    }


    return (
        <div>
            <h1>What's the Plan for Today</h1>
            <TodoForms onSubmit={addTodo}/>
            <Todo 
            todos={todos} 
            completeTodo={completeTodo} 
            removeTodo={removeTodo}
            updateTodo={updateTodo}/>
        </div>
    )
}
