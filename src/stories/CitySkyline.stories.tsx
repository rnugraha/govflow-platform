import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CitySkyline } from "@/components/city-skyline";

const meta = {
	title: "Components/CitySkyline",
	component: CitySkyline,
	parameters: { layout: "fullscreen" },
	decorators: [
		(Story) => (
			<div className="relative h-64 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof CitySkyline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkTheme: Story = {
	globals: { theme: "dark" },
	decorators: [
		(Story) => (
			<div className="relative h-64 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 overflow-hidden">
				<Story />
			</div>
		),
	],
};

export const Tall: Story = {
	decorators: [
		(Story) => (
			<div className="relative h-96 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
				<Story />
			</div>
		),
	],
};
