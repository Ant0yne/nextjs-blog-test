import Link from "next/link";

type Post = {
	id: number;
	title: string;
};

const PostsList = async () => {
	// await new Promise((resolve) => setTimeout(resolve, 2000));
	const response = await fetch("https://dummyjson.com/posts?limit=10");
	const data = await response.json();

	return (
		<ul>
			{data.posts.map((post: Post) => (
				<li key={post.id} className="mb-3">
					<Link href={`/posts/${post.id}`}>{post.title}</Link>
				</li>
			))}
		</ul>
	);
};

export default PostsList;
