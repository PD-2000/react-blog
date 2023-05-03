import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const NavBar = () => {
	return (
		<Navbar
			bg="primary"
			variant="dark"
			expand="md"
			className="mt-4 mb-4 rounded px-3 justify-content-between"
		>
			<Navbar.Brand>Blog.app</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="ms-auto flex-md-row">
				<Nav.Link as={NavLink} to="/">Home</Nav.Link>
				<Nav.Link as={NavLink} to="/about">About</Nav.Link>
			</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;