import { createContext, useReducer } from "react";
import { ComponentB } from "./ComponentB";

const initialState = 0;
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

const CounterContext = createContext();

export const ComponentA = () => {
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<h2>Count: {count}</h2>
			<CounterContext.Provider value={{ counterDispatch: dispatch }}>
				<ComponentB />
			</CounterContext.Provider>
		</div>
	);
};

export default CounterContext;
