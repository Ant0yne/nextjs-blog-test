// cSpell: words prisma

import prisma from "@/lib/db";
import Link from "next/link";

const PostsList = async () => {
	// await new Promise((resolve) => setTimeout(resolve, 2000));
	const posts = await prisma.post.findMany();

	return (
		<ul>
			{posts.map((post) => (
				<li key={post.id} className="mb-3">
					<Link href={`/posts/${post.id}`}>{post.title}</Link>
				</li>
			))}
		</ul>
	);
};

export default PostsList;
