import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
	eslint: {
		// made via bun check
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{ hostname: "pbs.twimg.com", protocol: "https" },
			{ hostname: "abs.twimg.com", protocol: "https" },
			{ hostname: "i.ytimg.com", protocol: "https" },
		],
	},
	typescript: {
		// made via bun check
		ignoreBuildErrors: true,
	},
};

export default withMDX(config);
