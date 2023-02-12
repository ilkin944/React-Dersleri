import { useReducer } from "react";

function reducer(state, action) {
	switch (action.type) {
		case 'TODO_LISTI_YENILE':
			return {
				...state,
				todo: action.value
			}

		case 'TODO_ELAVE_ET':
			return {
				...state,
				todo: '',
				todos: [...state.todos, action.todo]
			}

		case 'TODO_SIL':
			return {
				...state,
				todos: [...state.todos.filter((t, i) => i !== action.index)]
			}
		default: return state;
	}
}

function Todos() {

	const [state, dispatch] = useReducer(reducer, {
		todos: [],
		todo: ''
	})

	const addTodo = () => {
		dispatch({ type: 'TODO_ELAVE_ET', todo: state.todo })
	}

	const deleteTodo = index => {
		dispatch({ type: 'TODO_SIL', index })
	}

	return (
		<>
			<input type="text" value={state.todo} onChange={e => dispatch({ type: 'TODO_LISTI_YENILE', value: e.target.value })} />
			<button disabled={!state.todo} onClick={addTodo}>Əlavə et</button>
			<ul>
				{state.todos.map((todo, index) => (
					<li key={index}>{todo} - <button onClick={() => deleteTodo(index)}>SİL</button></li>
				))}
			</ul>
		</>
	)
}

export default Todos