import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Home from './components/pages/Home/Home';
import SinglePost from './components/pages/SinglePost/SinglePost'
import AddPost from './components/pages/AddPost/AddPost'
import EditPost from './components/pages/EditPost/EditPost'
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import Footer from './components/views/Footer/Footer';
import Categories from './components/features/Categories/Categories';
import SingleCategory from './components/pages/SingleCategory/SingleCategory';

const App = () => {
	return (
		<div className="App">
			<Container>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/categories" element={<Categories />} />
					<Route path="/categories/:category" element={<SingleCategory />} />
					<Route path="/about" element={<About />} />
					<Route path="/post/:id" element={<SinglePost />} />
					<Route path="/post/add" element={<AddPost />} />
					<Route path="/post/edit/:id" element={<EditPost />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</Container>
		</div>
	);
};

export default App;