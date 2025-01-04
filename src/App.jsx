import { GetPost } from "./components/GetPost";
import {Title} from './components/Title'

export const App = () => {
	return (
		<div className="px-10 py-10 space-y-10">
			<Title>Post</Title>
			<GetPost/>
		</div>
	);
};
