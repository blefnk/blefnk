import type { Metadata } from "next";

import "./globals.css";

import type { ReactNode } from "react";

import { RootProvider } from "fumadocs-ui/provider";
import { cn } from "fumadocs-ui/utils/cn";
import { ThemeProvider } from "next-themes";
import { Inter, Space_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceMono = Space_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	description:
		"building things that feel right. next.js, node dev focused on clean dx, honest ux, & tools you actually want to use. writer. just a simple guy, thinking big.",
	metadataBase: new URL("https://blefnk.reliverse.org"),
	openGraph: {
		images: "/og-image.png",
	},
	title: "nazar kornienko @blefnk node nextjs developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html className={inter.className} lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					inter.variable,
					spaceMono.variable,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					disableTransitionOnChange
					enableSystem
					themes={["light", "dark", "ghibli", "system"]}
				>
					<RootProvider>{children}</RootProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
