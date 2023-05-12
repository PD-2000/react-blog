import {Form, Button} from "react-bootstrap";
import {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./PostForm.module.scss";

const PostForm = ({action, actionText, ...props}) => {
	const [title, setTitle] = useState(props.title || '');
	const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
	const [author, setAuthor] = useState(props.author || '');
	const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
	const [mainContent, setMainContent] = useState(props.mainContent || '');

	const handleSubmit = (e) => {
		e.preventDefault();
		action({title, shortDescription, author, publishedDate, mainContent});
	};

	return(
		<div style={{width: '70%'}}>
			<Form className="">
				<Form.Group className="mb-4">
					<Form.Label>Title</Form.Label>
					<Form.Control value={title} onChange={e => setTitle(e.target.value)} />
				</Form.Group>
				<Form.Group className="mb-4">
					<Form.Label>Author</Form.Label>
					<Form.Control value={author} onChange={e => setAuthor(e.target.value)} />
				</Form.Group>
				<Form.Group className="mb-4">
					<Form.Label>Published date</Form.Label>
					<DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
				</Form.Group>
				<Form.Group className="mb-4">
					<Form.Label>Short description</Form.Label>
					<ReactQuill className={styles.shortDescription} value={shortDescription} onChange={setShortDescription} />
				</Form.Group>
				<Form.Group className="mb-4">
					<Form.Label>Main content</Form.Label>
					<ReactQuill className={styles.mainContent} value={mainContent} onChange={setMainContent}>
					</ReactQuill>
				</Form.Group>
				<Button onClick={handleSubmit} variant="primary" type="submit">
					Add post
				</Button>
			</Form>
		</div>
	);
};

export default PostForm;