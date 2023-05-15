// Selectors
export const getAllCategories = ({categories}) => categories;
export const getFilteredCategories = ({posts}, category) => posts.filter((post) => post.category === category);

// Reducer
const categoriesReducer = (statePart = [], action) => {
	switch (action.type){
		default:
			return statePart;
	};
};

export default categoriesReducer;