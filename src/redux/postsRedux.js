// Selectors
export const getAllPosts = ({posts}) => posts;
export const getPostById = ({posts}, postId) => posts.find(post => post.id === postId);

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