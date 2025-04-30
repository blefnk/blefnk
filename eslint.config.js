// @ts-check

import eslint from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.recommended,
	{
		ignores: ["node_modules", ".next", ".source"],
	},
	perfectionist.configs["recommended-natural"],
	{ rules: {} },
);
