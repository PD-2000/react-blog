import shortid from 'shortid';

// Selectors
export const getAllPosts = ({posts}) => posts;
export const getPostById = ({posts}, postId) => posts.find(post => post.id === postId);

// Actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_POST = createActionName('ADD_POST');
const REMOVE_POST = createActionName('REMOVE_POST');
const EDIT_POST = createActionName('EDIT_POST');

// Action creators
export const addPost = payload => ({type: ADD_POST, payload});
export const removePost = payload => ({type: REMOVE_POST, payload});
export const editPost = payload => ({type: EDIT_POST, payload});

// Reducer
const postsReducer = (statePart = [], action) => {
	switch(action.type){
		case ADD_POST:
			return [...statePart, {...action.payload, id: shortid()}];
		case REMOVE_POST:
			return [...statePart.filter(post => post.id !== action.payload)];
		case EDIT_POST:
			return statePart.map(post => (post.id === action.payload.id ? {...post, ...action.payload} : post));
		default:
			return statePart;
	};
};

export default postsReducer;