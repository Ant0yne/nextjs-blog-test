import { createPost } from "@/actions/actions";

const Form = () => {
	return (
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
	);
};

export default Form;
