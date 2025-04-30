import { blog } from "🐈/.source";
import { loader } from "fumadocs-core/source";

// @see https://fumadocs.vercel.app/docs/headless/source-api
export const source = loader({
	// it assigns a URL to site pages
	baseUrl: "/blog",
	source: blog.toFumadocsSource(),
});
