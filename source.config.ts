import { defineConfig, defineDocs } from "fumadocs-mdx/config";

// blog collection
export const blog = defineDocs({
	dir: "content/blog",
});

export default defineConfig({
	mdxOptions: {
		// ...MDX options
		remarkPlugins: [
			// ...remark plugins for structured data
		],
	},
});
