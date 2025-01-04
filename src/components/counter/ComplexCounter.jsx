import { useReducer } from "react";

const initialState = {
	counter1: 1,
	counter2: 1,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "increment1":
			return { ...state, counter1: state.counter1 + action.value };
		case "decrement1":
			return { ...state, counter1: state.counter1 - action.value };
		case "increment2":
			return { ...state, counter2: state.counter2 + action.value };
		case "decrement2":
			return { ...state, counter2: state.counter2 - action.value };

		default:
			return state;
	}
};

export const ComplexCounter = () => {
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<div>1. Counter: {count.counter1}</div>
			<button
				onClick={() =>
					dispatch({
						type: "increment1",
						value: 5,
					})
				}
				className="py-2 px-4 border bg-gray-200 mr-4"
			>
				Increment
			</button>
			<button
				onClick={() =>
					dispatch({
						type: "decrement1",
						value: 1,
					})
				}
				className="py-2 px-4 border bg-gray-200 mr-4"
			>
				Decrement
			</button>
			<div>2. Counter: {count.counter2}</div>
			<button
				onClick={() =>
					dispatch({
						type: "increment2",
						value: 1,
					})
				}
				className="py-2 px-4 border bg-gray-200 mr-4"
			>
				Increment
			</button>
			<button
				onClick={() =>
					dispatch({
						type: "decrement2",
						value: 1,
					})
				}
				className="py-2 px-4 border bg-gray-200 mr-4"
			>
				Decrement
			</button>
		</div>
	);
};
