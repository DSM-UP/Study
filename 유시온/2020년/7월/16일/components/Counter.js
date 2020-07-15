import React from 'react';

const Counter = (props) => {
	const { number, diff, onIncrease, onDecrease, onSetDiff } = props;

	const onChange = (e) => {
		onSetDiff(parseInt(e.target.value, 10));
	};

	return (
		<div>
			<h1>{number}</h1>
			<div>
				<input type="number" value={diff} min="1" onChange={onChange} />
				<button onClick={onIncrease}>+{diff}</button>
				<button onClick={onDecrease}>-{diff}</button>
			</div>
		</div>
	);
};

export default Counter;
