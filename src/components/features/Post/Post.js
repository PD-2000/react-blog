import {Card, Button, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {dateToStr} from "../../../utils/dateToStr";

const Post = props => {
	return(
		<Col className="py-4 col-12 col-md-6 col-lg-4">
			<Card>
				<Card.Body >
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>
						<p><b>Author: </b>{props.author}
						<br/><b>Published: </b>{dateToStr(props.publishedDate)}
						<br/><b>Category: </b>{props.category}</p>
						<p dangerouslySetInnerHTML={{__html: props.shortDescription}} />
					</Card.Text>
					<Link key={props.id} to={"/post/" + props.id}>
						<Button variant="primary">Read more</Button>
					</Link> 
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Post;