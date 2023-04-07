// Selectors

// Actions
const createActionName = actionName => `app/posts/${actionName}`;

// Action creators
const postsReducer = (statePart = [], action) => {
	switch(action.type){
		default:
			return statePart;
	};
};

export default postsReducer;