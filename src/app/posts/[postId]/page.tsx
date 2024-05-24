// cSpell: words prisma

import prisma from "@/lib/db";
import { notFound } from "next/navigation";

const Post = async ({ params }: { params: { postId: string } }) => {
	const post = await prisma.post.findUnique({
		where: {
			id: Number(params.postId),
		},
	});

	if (!post) {
		notFound();
	}

	return (
		<main className="px-7 pt-24 text-center">
			<h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
			<p className="max-w-[700px] mx-auto">{post.body}</p>
		</main>
	);
};

export default Post;
