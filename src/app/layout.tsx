import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto_Slab } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { cn } from "@/lib/utils";

const interHeading = Inter({ subsets: ["latin"], variable: "--font-heading" });

const robotoSlab = Roboto_Slab({
	subsets: ["latin"],
	variable: "--font-serif",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Municipality of Arkadia — Serving Citizens with Excellence",
	description:
		"Official portal of the Municipality of Arkadia. Access government services, apply for documents, and stay informed.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn(
				"h-full",
				"antialiased",
				geistSans.variable,
				geistMono.variable,
				"font-serif",
				robotoSlab.variable,
				interHeading.variable,
			)}
			suppressHydrationWarning
		>
			<body className="min-h-full flex flex-col bg-background text-foreground">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
