import { useReducer } from "react";

const initialState = 1;
const reducer = (state, action) => {
	switch (action) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		default:
			return state;
	}
};

export const Counter = () => {
  	const [newState, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<h2>Count: {newState}</h2>
			<button
				onClick={() => dispatch("increment")}
				className="py-2 px-4 border bg-gray-200 mr-4"
			>
				Increment +
			</button>
			<button
				onClick={() => dispatch("decrement")}
				className="py-2 px-4 border bg-gray-200"
			>
				Decrement -
			</button>
		</div>
	);
};
