import { useEffect, useReducer } from "react";

const initialState = {
	loading: true,
	error: "",
	post: {},
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SUCCESS":
			return {
				loading: false,
				error: "",
				post: action.result,
			};
		case "ERROR":
			return {
				loading: false,
				error: "There was en Error",
				post: {},
			};
		default:
			return state;
	}
};

export const GetPost = () => {
	const [newState, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts/1")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				return dispatch({
					type: "SUCCESS",
					result: data,
				});
			})
			.catch(() => {
				dispatch({
					type: "ERROR",
				});
			});
	}, []);

	if (newState.error) {
		return (
			<h1 className="text-center text-2xl text-red-600">{newState.error}</h1>
		);
	}

	return (
		<div>
			{newState.loading ? (
				<h1 className="text-center text-2xl text-blue-600">Loading....</h1>
			) : (
				<h1 className="text-center text-2xl capitalize">
					<span className="font-bold text-orange-600">Post Title: </span>
					{newState.post.title}
				</h1>
			)}
		</div>
	);
};
