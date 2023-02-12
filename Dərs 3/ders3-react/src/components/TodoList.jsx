// ./TodoList.js
import { memo } from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
  console.log('todo list');
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
    </ul>
  );
}

export default memo(TodoList);