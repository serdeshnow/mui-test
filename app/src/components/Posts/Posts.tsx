import { List } from '@mui/material';
import { generatePosts } from '../../utils';
import { Post } from './components/Post/Post.tsx';

const posts = generatePosts(10);
console.log(posts)

export const Posts = () => {
	return (
		<List sx={{display: 'flex', flexWrap:"wrap", alignItems: 'center'}}>
			{posts.map(post => (
				<Post key={post.id} post={post}/>
			))}
		</List>
	);
};
