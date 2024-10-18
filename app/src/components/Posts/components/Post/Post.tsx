import {
	Card,
	CardActionArea, CardContent, CardMedia,
	ListItem,
	Typography,
} from '@mui/material';

interface IPost {
	id?: string;
	title: string;
	photo:string;
}

interface Props {
	post?: IPost
}


export const Post = ({ post }:Props) => {
	return (
		<ListItem sx={{maxWidth: 1/3, height:300}}>
			<Card sx={{height:1, width:1, borderRadius: '4%'}}>
					<CardActionArea>
						<CardMedia
							component="img"
							image={post?.photo}
							alt="photo"
							height="200"
						/>
					</CardActionArea>
				<CardContent >
					<Typography>
						{post?.title}
					</Typography>
				</CardContent>
			</Card>
		</ListItem>
	);
};
