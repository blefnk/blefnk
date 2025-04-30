import type { FC } from "react";

import { Link } from "🐈/ui/primitives/link";
import { Card } from "fumadocs-ui/components/card";

export const AboutTab: FC = () => (
	<Card className="brutal-card p-6" title="who i am">
		<div className="space-y-4">
			<p>
				nazar. blefnk online.
				<br />i write code with feeling —<br />
				not the fake kind. the <em>gut kind</em>.<br />
				the "this actually works" kind.
			</p>
			<p>
				i build so humans <em>and</em> machines get it.
				<br />
				no dark patterns. no growth hacks.
				<br />
				just focused software that quietly goes:
			</p>
			<blockquote className="my-4 border-l-4 border-foreground pl-4 italic">
				hey. i did the thing. you&apos;re welcome.
			</blockquote>
			<p>
				i&apos;m not chasing clout, hype, or a yc alum badge.
				<br />
				i&apos;m chasing that moment someone mutters:
			</p>
			<blockquote className="my-4 border-l-4 border-foreground pl-4 italic">
				this saved me 3 hours…
				<br />
				and didn&apos;t make me want to die.
			</blockquote>
		</div>
		<h3 className="mt-8 mb-4 text-xl font-bold">what i do</h3>
		<ul className="space-y-2">
			<li className="flex items-start gap-2">
				<span className="text-xl">🦄</span>
				<span>
					contributions to the js and ts ecosystem, with a focus on developer
					tools, templates, and utilities that improve the dx
				</span>
			</li>
			<li className="flex items-start gap-2">
				<span className="text-xl">🌌</span>
				<span>tools that feel alive</span>
			</li>
			<li className="flex items-start gap-2">
				<span className="text-xl">🔧</span>
				<span>
					the reliverse js ecosystem: dev tools with weird little hearts
				</span>
			</li>
			<li className="flex items-start gap-2">
				<span className="text-xl">🧱</span>
				<span>design for developer feeling, not fake productivity</span>
			</li>
			<li className="flex items-start gap-2">
				<span className="text-xl">📦</span>
				<span>
					templates like{" "}
					<Link
						href="https://github.com/blefnk/relivator"
						rel="noopener noreferrer"
						target="_blank"
					>
						relivator
					</Link>{" "}
					+{" "}
					<Link
						href="https://github.com/blefnk/versator"
						rel="noopener noreferrer"
						target="_blank"
					>
						versator
					</Link>{" "}
					— skip boilerplate, ship soul
				</span>
			</li>
			<li className="flex items-start gap-2">
				<span className="text-xl">✍️</span>
				<span>
					posts on{" "}
					<Link
						href="https://x.com/blefnk"
						rel="noopener noreferrer"
						target="_blank"
					>
						<del>x</del> twitter
					</Link>
					, essays <Link href="/blog">on my blog</Link> , and{" "}
					<Link
						href="https://media.reliverse.org"
						rel="noopener noreferrer"
						target="_blank"
					>
						reliverse media site
					</Link>
					, w/ emotions
				</span>
			</li>
			<li className="flex items-start gap-2">
				<span className="text-xl">🫠</span>
				<span>still trying to break this site even harder</span>
			</li>
		</ul>
	</Card>
);
