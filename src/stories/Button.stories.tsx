import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const meta = {
	title: "UI/Button",
	component: Button,
	parameters: { layout: "centered" },
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "secondary", "outline", "ghost", "destructive", "link"],
		},
		size: {
			control: "select",
			options: ["sm", "default", "lg", "icon"],
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { children: "Apply Now", variant: "default" },
};

export const Outline: Story = {
	args: { children: "Browse Services", variant: "outline" },
};

export const Secondary: Story = {
	args: { children: "Learn More", variant: "secondary" },
};

export const Destructive: Story = {
	args: { children: "Cancel Application", variant: "destructive" },
};

export const Ghost: Story = {
	args: { children: "View All", variant: "ghost" },
};

export const Large: Story = {
	args: { children: "Start Application", size: "lg" },
};

export const Small: Story = {
	args: { children: "View FAQ", size: "sm" },
};

export const WithIcon: Story = {
	args: {
		children: (
			<>
				Apply for Passport <ArrowRight className="ml-2 w-4 h-4" />
			</>
		),
		size: "lg",
	},
};

export const IconOnly: Story = {
	args: { children: <Download className="w-4 h-4" />, size: "icon" },
};
