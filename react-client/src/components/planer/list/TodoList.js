import React from 'react';
import TodoItem from './todoItem.js';


const TodoList = (props) => (
    <div className="posts">
 {props.todos.map((todo) =>  <TodoItem todo={todo} key={todo.id}/>)}
 </div>
);

export default TodoList;
