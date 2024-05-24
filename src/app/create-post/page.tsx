// cSpell: ignore kinde, nextjs
import Form from "@/components/Form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const CreatePost = () => {
	return (
		<main className="text-center pt-16 px-5">
			<h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
			<Form />
			<LogoutLink>Log out</LogoutLink>
		</main>
	);
};

export default CreatePost;
