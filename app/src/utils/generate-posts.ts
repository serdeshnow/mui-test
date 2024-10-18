import { faker } from '@faker-js/faker';

// Step 3: Define the Post interface
interface IPost {
	id: string;
	photo: string;
	title: string;
}

// Step 4: Create a factory function to generate a fake post
function createFakePost(): IPost {
	return {
		id: faker.string.uuid(),
		photo: faker.image.urlPlaceholder(),
		title: faker.lorem.sentence(),
	};
}

// Step 5: Generate an array of fake posts
export function generateFakePosts(count: number): IPost[] {
	return Array.from({ length: count }, createFakePost);
}
