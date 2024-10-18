import { Route, Routes } from 'react-router-dom';
import { HomePage, MainLayout } from '../pages';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout/>} >
				<Route index element={<HomePage/>}/>
				{/*<Route path="posts" element={<PostsPage/>}/>*/}
				{/*<Route path="about" element={<AboutPage/>}>*/}
			</Route>
			{/*<Route path="*" element={<NotFoundPage/>}/>*/}
		</Routes>
	);
};
