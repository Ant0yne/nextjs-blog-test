const Post = async () => {
	const response = await fetch("https://dummyjson.com/posts?limit=10");
	const data = await response.json();

	return (
		<main>
			<h1></h1>
			<p></p>
		</main>
	);
};

export default Post;
