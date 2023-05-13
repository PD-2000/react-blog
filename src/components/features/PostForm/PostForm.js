import {Form, Button} from "react-bootstrap";
import {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./PostForm.module.scss";
import {useForm} from "react-hook-form";

const PostForm = ({action, actionText, ...props}) => {
	const {register, handleSubmit: validate, formState: {errors}} = useForm();
	const [title, setTitle] = useState(props.title || '');
	const [author, setAuthor] = useState(props.author || '');
	const [publishedDate, setPublishedDate] = useState(new Date());
	const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
	const [mainContent, setMainContent] = useState(props.mainContent || '');
	const [publishedDateError, setPublishedDateError] = useState(false);
	const [mainContentError, setMainContentError] = useState(false);

	const handleSubmit = () => {
		setPublishedDateError(!publishedDate)
		setMainContentError(!mainContent)
		if(mainContent && publishedDate)
			action({title, author, publishedDate, shortDescription, mainContent});
	};

	return(
		<div style={{width: '70%'}}>
			<Form onSubmit={validate(handleSubmit)}>
				<Form.Group className="mb-4">
					<Form.Label>Title</Form.Label>
					<Form.Control
						{...register("title", {required: true, minLength: 3})}
						value={title}
						onChange={e => setTitle(e.target.value)}
						type="text" placeholder="Enter title"
					/>
					{errors.title && <small className="d-block form-text text-danger mt-2">This field should be at least 3 letters long.</small>}
				</Form.Group>
				<Form.Group className="mb-4">
					<Form.Label>Author</Form.Label>
					<Form.Control
						{...register("author", {required: true, minLength: 3})}
						value={author}
						onChange={e => setAuthor(e.target.value)}
					/>
					{errors.author && <small className="d-block form-text text-danger mt-2">This field should be at least 3 letters long.</small>}
				</Form.Group>
				<Form.Group className="mb-4">
					<Form.Label>Published date</Form.Label>
					<DatePicker
						// {...register("publishedDate", {required: true})}
						// dateFormat="MM/dd/yyyy"
						// dateFormat="dd-MM-yyyy"
						selected={publishedDate}
						onChange={(date) => setPublishedDate(date)}
					/>
					{publishedDateError && <small className="d-block form-text text-danger mt-2">Date is required.</small>}
				</Form.Group>
				<Form.Group className="mb-4">
					<Form.Label>Short description</Form.Label>
					<Form.Control
						{...register("shortDescription", {required: true, minLength: 20})}
						as="textarea"
						rows={3}
						value={shortDescription}
						onChange={e => setShortDescription(e.target.value)}
					/>
        			{errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field should be at least 20 letters long.</small>}
				</Form.Group>
				<Form.Group className="mb-4">
					<Form.Label>Main content</Form.Label>
					<ReactQuill
						className={styles.mainContent}
						value={mainContent}
						onChange={setMainContent}
					>
						<div className="main-description" />
					</ReactQuill>
					{mainContentError && <small className="d-block form-text text-danger mt-2">This field should not be empty.</small>}
				</Form.Group>
				<Button variant="primary" type="submit">
					Add post
				</Button>
			</Form>
		</div>
	);
};

export default PostForm;