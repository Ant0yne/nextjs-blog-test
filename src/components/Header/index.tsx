import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/posts", label: "Posts" },
];

const Header = () => {
	return (
		<header className="flex justify-between items-center py-4 px-7 border-b">
			<Link href="/">
				<Image
					src="https://res.cloudinary.com/dxyptix0d/image/upload/v1716467037/npwz0olb9ycxwv2frmfn.png"
					alt="Logo"
					className="w-[35px] h-[35px]"
					width="35"
					height="35"
				/>
			</Link>
			<nav>
				<ul className="flex gap-x-4 text-[14px]">
					{navLinks.map((link) => {
						return (
							<li key={link.href}>
								<Link className="text-zinc-400" href={link.href}>
									{link.label}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
