// cSpell: ignore kinde, nextjs
import { createPost } from "@/actions/actions";

const CreatePost = () => {
	return (
		<main className="text-center pt-16 px-5">
			<h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
			<form action={createPost} className="h-10 space-x-2 mt-10">
				<input
					className="border rounded px-3"
					type="text"
					name="title"
					id="title"
					placeholder="Title for new post"
					required
				/>
				<button className="h-full bg-blue-500 px-5 rounded text-white">
					Submit
				</button>
			</form>
		</main>
	);
};

export default CreatePost;
