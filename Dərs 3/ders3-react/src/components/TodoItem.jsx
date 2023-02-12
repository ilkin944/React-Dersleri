// ./TodoItem.js
import { memo } from 'react';

function TodoItem({ todo }) {
  console.log('todo item', todo);
  return <li>{todo}</li>;
}

export default memo(TodoItem);