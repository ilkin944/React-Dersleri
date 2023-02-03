import React, { useReducer } from 'react';

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'artir':
      return { count: state.count + 1 };
    case 'azalt':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'artir' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'azalt' })}>
        Decrement
      </button>
    </>
  );
}

export default Counter;