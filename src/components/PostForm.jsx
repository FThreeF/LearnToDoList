import { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = () => {
	const [post, setPost] = useState({
		title: '',
		body: '',
	});
	return (
		<form>
			<MyInput
				value={post.title}
				onChange={(e) =>
					setPost({
						...post,
						title: e.target.value,
					})
				}
				placeholder='Название поста'></MyInput>
			<MyInput
				value={post.body}
				onChange={(e) =>
					setPost({
						...post,
						body: e.target.value,
					})
				}
				placeholder='Описание поста'></MyInput>
			<MyButton onClick={addNewPost}>
				Создать пост
			</MyButton>
		</form>
	);
};

export default PostForm;
