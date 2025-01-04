import { Counter } from "./components/counter/Counter";
import { ComplexCounter } from "./components/counter/ComplexCounter";
import { Title } from "./components/Title";
import { ComponentA } from "./components/component/ComponentA";

export const App = () => {
	return (
		<div className="px-10 py-10 space-y-10">
			<Title>Counter</Title>
			<Counter />
			<Title>Complex Counter</Title>
			<ComplexCounter />
			<Title>Context Counter</Title>
			<ComponentA />
		</div>
	);
};
