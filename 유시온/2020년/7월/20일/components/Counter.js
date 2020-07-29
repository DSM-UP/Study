import React from 'react';

const Counter = (props) => {
	const { number, onIncrease, onDecrease, onDouble, onHalf } = props;

	return (
		<div>
			<h1>{number}</h1>
			<div>
				<button onClick={onIncrease}>+1</button>
				<button onClick={onDecrease}>-1</button>
				<button onClick={onDouble}>*2</button>
				<button onClick={onHalf}>/2</button>
			</div>
		</div>
	);
};

export default Counter;
