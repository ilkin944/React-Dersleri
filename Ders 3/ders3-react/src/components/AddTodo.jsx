// ./AddTodo.js
import { useState, memo } from 'react';

function AddTodo({ setTodos }) {
  console.log('add todo');
  const [todo, setTodo] = useState('');
  const submitHandle = (e) => {
    e.preventDefault();
    setTodos((todos) => [...todos, todo]);
    setTodo('');
  };
  return (
    <form onSubmit={submitHandle}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button disabled={!todo} type="submit">
        Əlavə et
      </button>
    </form>
  );
}

export default memo(AddTodo);