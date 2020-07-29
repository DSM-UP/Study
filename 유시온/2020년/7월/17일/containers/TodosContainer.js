import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = () => {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	const onCreate = (text) => dispatch(addTodo(text));
	const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

	return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

export default TodosContainer;
