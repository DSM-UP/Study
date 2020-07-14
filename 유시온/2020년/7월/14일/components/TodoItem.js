import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../reducers/TodoContext';

const Remove = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	color: #dee2e6;
	font-size: 24px;
	cursor: pointer;

	&:hover {
		color: #ff6b6b;
	}

	display: none;
`;

const TodoItemBlock = styled.div`
	display: flex;
	align-items: center;

	padding: 12 0;

	&:hover {
		${Remove} {
			display: initial;
		}
	}
`;

const CheckCircle = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 16px;
	border: 1px solid #ced4da;
	font-size: 24px;

	display: flex;
	align-items: center;
	justify-content: center;

	margin-right: 20px;

	cursor: pointer;

	${(props) =>
		props.done &&
		css`
			border: 1px solid #38d9a9;
			color: #38d9a9;
		`}
`;

const Text = styled.div`
	flex: 1;
	font-size: 21px;
	color: #495057;
	${(props) =>
		props.done &&
		css`
			color: #ced4da;
		`}
`;

const TodoItem = ({ id, done, text }) => {
	const dispatch = useTodoDispatch();
	const onToggle = () => dispatch({ type: 'TOGGLE', id });
	const onRemove = () => dispatch({ type: 'REMOVE', id });

	return (
		<TodoItemBlock>
			<CheckCircle done={done} onClick={onToggle}>
				{done && <MdDone />}
			</CheckCircle>
			<Text done={done}>{text}</Text>
			<Remove onClick={onRemove}>
				<MdDelete />
			</Remove>
		</TodoItemBlock>
	);
};

export default TodoItem;
