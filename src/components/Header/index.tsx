import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/posts", label: "Posts" },
];

const Header = () => {
	return (
		<>
			<header>
				<Image
					src="https://res.cloudinary.com/dxyptix0d/image/upload/v1716467037/npwz0olb9ycxwv2frmfn.png"
					alt="Logo"
					className="w-[35px] h-[35px]"
					width="35"
					height="35"
				/>
			</header>
			<nav>
				<ul>
					{navLinks.map((link) => {
						return (
							<li key={link.href}>
								<Link href={link.href}>{link.label}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
};

export default Header;
