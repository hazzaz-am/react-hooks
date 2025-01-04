import { useContext } from "react";
import CounterContext from "./ComponentA";

export const ComponentC = () => {
  const { counterDispatch } = useContext(CounterContext);
  return (
		<div>
			<button
				onClick={() => counterDispatch("increment")}
				className="py-2 px-4 border bg-gray-200 mr-4"
			>
				Increment +
			</button>
			<button
				onClick={() => counterDispatch("decrement")}
				className="py-2 px-4 border bg-gray-200"
			>
				Decrement -
			</button>
		</div>
	);
}