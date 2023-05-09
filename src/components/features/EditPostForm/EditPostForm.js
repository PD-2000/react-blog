import {useDispatch, useSelector} from 'react-redux';
import {editPost, getPostById} from '../../../redux/postsRedux';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import PostForm from "../PostForm/PostForm";

const EditPostForm = () => {
	const {id} = useParams();
	const post = useSelector((state) => getPostById(state, id));

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = (post) => {
		dispatch(editPost({...post, id}));
		navigate('/');
	};

	if(!post)
		return <Navigate to="/" />;

	return(
		<PostForm
			action={handleSubmit}
			actionText="Edit Post"
			title={post.title}
			shortDescription={post.shortDescription}
			author={post.author}
			publishedDate={post.publishedDate}
			content={post.content}
			category={post.category}
		/>
	);
};

export default EditPostForm;