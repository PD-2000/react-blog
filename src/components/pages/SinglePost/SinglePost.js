import {useParams, Link, Navigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {getPostById, removePost} from "../../../redux/postsRedux";
import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import { dateToStr } from "../../../utils/dateToStr";

const SinglePost = props => {
	const {id} = useParams();
	const postData = useSelector(state => getPostById(state, id));
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true)
	const deletePost = () => {
		dispatch(removePost(id));
		handleClose();
	};

	if(!postData)
		return <Navigate to="/" />
	return(
		<>
			<div className="d-flex justify-content-between">
				<h1>{postData.title}</h1>
				<div>
					<Link key={props.id} to={"/post/edit/" + id}>
						<Button variant="outline-info m-1">Edit post</Button>
					</Link>
					<Button onClick={handleShow} variant="outline-danger m-1">Delete</Button>
				</div>
			</div>
			<p>
				<b>Author: </b>{postData.author}
				<br/><b>Published: </b>{dateToStr(postData.publishedDate)}
			</p>
			<p dangerouslySetInnerHTML={{__html: postData.mainContent}} />
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Are you sure?</Modal.Title>
				</Modal.Header>
				<Modal.Body>This post will be irreversibly removed.</Modal.Body>
				<Modal.Footer>
					<Button onClick={deletePost} variant="danger">Remove</Button>
					<Button onClick={handleClose} variant="secondary">Cancel</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default SinglePost;