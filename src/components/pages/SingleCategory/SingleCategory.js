import {useParams, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getFilteredCategories} from "../../../redux/categoriesRedux";
import {Row} from "react-bootstrap";
import Post from "../../features/Post/Post";

const SingleCategory = () => {
	const {category} = useParams();
	const categoriesData = useSelector(state => getFilteredCategories(state, category));
	
	if(!categoriesData)
		return <Navigate to="/categories/" />

	return(
		<Row>
			{categoriesData.map(post => <Post key={post.id} {...post} />)}  
		</Row>
	);
};

export default SingleCategory;