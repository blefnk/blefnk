import type { FC } from "react";

import { buttonVariants } from "🐈/ui/primitives/button";
import { Card } from "fumadocs-ui/components/card";
import { cn } from "fumadocs-ui/utils/cn";
import Link from "next/link";

export const DonateTab: FC = () => (
	<Card className="brutal-card p-6" title="donate">
		<div className="space-y-4">
			<p>
				you're not funding a startup.
				<br />
				you're backing <em>indie infrastructure</em>.<br />
				half-broken, duct-taped dreams
				<br />
				that somehow outlast the shiny stuff.
			</p>
			<h4 className="mt-6 mb-2 text-xl font-bold">why?</h4>
			<p>
				because i give a damn. because i'm still a human.
				<br />
				and because everything good breaks eventually —<br />
				unless someone keeps showing up to fix it 😉
			</p>
			<p className="mt-4">your support =</p>
			<ul className="ml-6 list-disc space-y-2">
				<li>staying indie, loud, with deeply chaotic weird ideas</li>
				<li>more tools → more working code in js ecosystem</li>
				<li>software that helps both humans and algorithms</li>
			</ul>
			<div className="mt-6">
				<Link
					className={cn(
						buttonVariants({ size: "sm", variant: "secondary" }),
						`inline-block underline-offset-4
             after:block after:h-px after:w-0 after:bg-current
             after:transition-all after:content-['']
             hover:after:w-full`,
					)}
					href="https://github.com/sponsors/blefnk"
					rel="noopener noreferrer"
					target="_blank"
				>
					support my work
				</Link>
			</div>
		</div>
	</Card>
);
