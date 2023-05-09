import {addPost} from '../../../redux/postsRedux';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import shortid from 'shortid';
import PostForm from "../PostForm/PostForm";

const AddPostForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = post => {
		dispatch(addPost({id: shortid(), ...post}));
		navigate('/');
	};

	return(
		<PostForm action={handleSubmit} actionText="Add Post" />
	);
};

export default AddPostForm;