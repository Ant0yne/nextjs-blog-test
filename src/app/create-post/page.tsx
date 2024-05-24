// cSpell: ignore kinde, nextjs
import { createPost } from "@/actions/actions";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const CreatePost = () => {
	return (
		<main className="text-center pt-16 px-5">
			<h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
			<form
				action={createPost}
				className="flex flex-col max-w-[400px] mx-auto gap-2 my-10">
				<input
					className="border rounded px-3 h-10"
					type="text"
					name="title"
					id="title"
					placeholder="Title for new post"
					required
				/>
				<textarea
					name="body"
					id="body"
					placeholder="Your post..."
					className="border rounded px-3 py-2"
					rows={10}
					required
				/>
				<button className="h-10 bg-blue-500 px-5 rounded text-white">
					Submit
				</button>
			</form>
			<LogoutLink>Log out</LogoutLink>
		</main>
	);
};

export default CreatePost;
