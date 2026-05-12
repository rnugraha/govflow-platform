import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const meta = {
	title: "Components/ThemeToggle",
	component: ThemeToggle,
	parameters: { layout: "centered" },
	decorators: [
		(Story, context) => {
			const theme = (context.globals["theme"] as string) ?? "light";
			return (
				<ThemeProvider
					attribute="class"
					defaultTheme={theme}
					enableSystem={false}
				>
					<div className="flex items-center justify-center p-8 bg-blue-800 rounded-lg">
						<Story />
					</div>
				</ThemeProvider>
			);
		},
	],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnNavigation: Story = {};

export const DarkMode: Story = {
	globals: { theme: "dark" },
};
