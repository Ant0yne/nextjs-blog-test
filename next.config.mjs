import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				pathname:
					"/dxyptix0d/image/upload/v1716467037/npwz0olb9ycxwv2frmfn.png",
			},
		],
	},
};

export default nextConfig;
