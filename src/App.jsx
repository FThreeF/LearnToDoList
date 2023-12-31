import { useRef, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

const App = () => {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript', body: 'Description' },
		{ id: 2, title: 'JavaScript', body: 'Description' },
		{ id: 3, title: 'JavaScript', body: 'Description' },
	]);

	

	const addNewPost = (e) => {
		e.preventDefault();

		setPosts([...posts, { id: Date.now(), ...post }]);
		setPost({ title: '', body: '' });
	};

	return (
		<div className='App'>
			
			<PostList posts={posts} title='Список постов' />
		</div>
	);
};

export default App;
