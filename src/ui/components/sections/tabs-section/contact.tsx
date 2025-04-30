import type { FC } from "react";

import { Card } from "fumadocs-ui/components/card";
import { Mail } from "lucide-react";
import Link from "next/link";

import { DiscordIcon } from "../../icons-svg/discord-icon";

export const ContactSection: FC = () => (
	<Card className="brutal-card p-6" title="let&apos;s connect">
		<p className="mb-6">i&apos;m the dev you feel safe dm&apos;ing</p>
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
			<Link
				className="brutal-card flex items-center gap-3 p-4 transition-colors hover:bg-zinc-900 dark:hover:bg-zinc-800"
				href="https://discord.gg/Pb8uKbwpsJ"
				rel="noopener noreferrer"
				target="_blank"
			>
				<DiscordIcon />

				<div>
					<h4 className="font-bold">discord</h4>
					<p className="text-sm text-muted-foreground">join my server</p>
				</div>
			</Link>
			<Link
				className="brutal-card flex items-center gap-3 p-4 transition-colors hover:bg-zinc-900 dark:hover:bg-zinc-800"
				href="mailto:blefnk@gmail.com"
			>
				<div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
					<Mail className="h-6 w-6" />
				</div>
				<div>
					<h4 className="font-bold">email</h4>
					<p className="text-sm text-muted-foreground">blefnk@gmail.com</p>
				</div>
			</Link>
		</div>
		<div className="mt-8 space-y-4">
			<p>
				i code for that tired dev at 3am,
				<br />
				staring at a screen, thinking:
			</p>
			<blockquote className="my-4 border-l-4 border-foreground pl-4 italic">
				does <em>anyone</em> out there still care?
			</blockquote>
			<p>
				i do. no ivory tower. no pitch deck.
				<br />
				just code that wants to feel like home.
			</p>
		</div>
	</Card>
);
