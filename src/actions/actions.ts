"use server";
// cSpell: words prisma, kinde

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createPost = async (formData: FormData) => {
	const { isAuthenticated } = getKindeServerSession();

	if (!isAuthenticated()) {
		redirect("api/auth/login?post_login_redirect_url=/create-post");
	}

	const title = formData.get("title") as string;
	const body = formData.get("body") as string;

	await prisma.post.create({
		data: {
			title,
			body,
		},
	});

	revalidatePath("/posts");
};
