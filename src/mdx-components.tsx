import type { MDXComponents } from "mdx/types";

import defaultMdxComponents from "fumadocs-ui/mdx";

/**
 * This function returns the MDX components, it is needed for MDX rendering.
 * @param components - Optional custom components to override the default components
 * @returns The merged components
 */
export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		...defaultMdxComponents,
		...components,
	};
}
