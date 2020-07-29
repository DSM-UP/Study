const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const DOUBLE = 'counter/DOUBLE';
const HALF = 'counter/HALF';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const double = () => ({ type: DOUBLE });
export const half = () => ({ type: HALF });

export const increaseAsync = () => (dispatch) => {
	setTimeout(() => dispatch(increase()), 1000);
};
export const doubleAsync = () => (dispatch) => {
	setTimeout(() => dispatch(double()), 1000);
};

const initialState = 0;

const counter = (state = initialState, action) => {
	switch (action.type) {
		case INCREASE:
			return state + 1;
		case DECREASE:
			return state - 1;
		case DOUBLE:
			return state * 2;
		case HALF:
			return state / 2;
		default:
			return state;
	}
};

export default counter;
