import type { Preview, Decorator } from "@storybook/nextjs-vite";
import React from "react";
import "../src/app/globals.css";

const withTheme: Decorator = (Story, context) => {
	const theme = (context.globals["theme"] as string) ?? "light";
	return React.createElement(
		"div",
		{ className: theme === "dark" ? "dark" : "" },
		React.createElement(
			"div",
			{ className: "bg-background text-foreground" },
			React.createElement(Story),
		),
	);
};

const preview: Preview = {
	globalTypes: {
		theme: {
			description: "Color scheme",
			toolbar: {
				title: "Theme",
				icon: "circlehollow",
				items: [
					{ value: "light", title: "Light", icon: "sun" },
					{ value: "dark", title: "Dark", icon: "moon" },
				],
				dynamicTitle: true,
			},
			defaultValue: "light",
		},
	},
	decorators: [withTheme],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		a11y: { test: "todo" },
	},
};

export default preview;
