import {Form, Button} from "react-bootstrap";
import {useState} from "react";

const PostForm = ({action, actionText, ...props}) => {
	const [title, setTitle] = useState(props.title || '');
	const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
	const [author, setAuthor] = useState(props.author || '');
	const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
	const [content, setContent] = useState(props.content || '');

	const handleSubmit = (e) => {
		e.preventDefault();
		action({title, shortDescription, author, publishedDate, content});
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
					<Form.Control value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
				</Form.Group>
				<Form.Group className="mb-4">
					<Form.Label>Short description</Form.Label>
					<Form.Control as="textarea" rows={2} value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
				</Form.Group>
				<Form.Group className="mb-4">
					<Form.Label>Main content</Form.Label>
					<Form.Control as="textarea" rows={10} value={content} onChange={e => setContent(e.target.value)} />
				</Form.Group>
				<Button onClick={handleSubmit} variant="primary" type="submit">
					Add post
				</Button>
			</Form>
		</div>
	);
};

export default PostForm;