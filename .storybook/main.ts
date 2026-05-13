import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import type { StorybookConfig } from "@storybook/nextjs-vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
	stories: [
		"../src/**/*.mdx",
		"../src/**/*.stories.@(js|jsx|mjs|tsx)",
	],
	addons: [
		"@chromatic-com/storybook",
		"@storybook/addon-vitest",
		"@storybook/addon-a11y",
		"@storybook/addon-docs",
		"@storybook/addon-onboarding",
	],
	framework: "@storybook/nextjs-vite",
	staticDirs: ["../public"],
	viteFinal: async (config) => {
		config.resolve ??= {};
		config.resolve.alias = {
			...(config.resolve.alias as Record<string, string>),
			"@": resolve(__dirname, "../src"),
		};
		return config;
	},
};

export default config;
