import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
	return (
		<li
			style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
			onClick={() => onToggle(todo.id)}
		>
			{todo.text}
		</li>
	);
});

const TodoList = React.memo(function TodoList({ todos, onToggle }) {
	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
			))}
		</ul>
	);
});

const Todos = ({ todos, onCreate, onToggle }) => {
	const [text, setText] = useState('');
	const onChange = (e) => setText(e.target.value);
	const onSubmt = (e) => {
		e.preventDefault();
		onCreate(text);
		setText('');
	};

	return (
		<div>
			<form onSubmit={onSubmt}>
				<input
					value={text}
					placeholder="할 일을 입력하세요.."
					onChange={onChange}
				/>
				<button type="submit">등록</button>
			</form>
			<TodoList todos={todos} onToggle={onToggle} />
		</div>
	);
};

export default Todos;
