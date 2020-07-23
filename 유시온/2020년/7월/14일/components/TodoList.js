import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../reducers/TodoContext';

const TodoListBlock = styled.div`
	flex: 1;
	padding: 20px 32px 48px 32px;
	overflow-y: auto;
`;

const TodoList = () => {
	const todos = useTodoState();

	return (
		<TodoListBlock>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					id={todo.id}
					text={todo.text}
					done={todo.done}
				/>
			))}
		</TodoListBlock>
	);
};

export default TodoList;
