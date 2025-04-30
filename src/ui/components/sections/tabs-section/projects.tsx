import type { FC } from "react";

import { Card } from "fumadocs-ui/components/card";
import Link from "next/link";

export const ProjectsTab: FC = () => (
	<Card className="brutal-card p-6" title="projects">
		<section className="mb-8">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="brutal-card p-4">
					<h3 className="font-bold">
						<Link
							className="underline"
							href="https://reliverse.org/repos/reliverse"
							rel="noopener noreferrer"
							target="_blank"
						>
							node related repos
						</Link>
					</h3>
					<p className="text-sm text-muted-foreground">github.com/reliverse</p>
				</div>
				<div className="brutal-card p-4">
					<h3 className="font-bold">
						<Link
							className="underline"
							href="https://reliverse.org/repos/blefnk"
							rel="noopener noreferrer"
							target="_blank"
						>
							web related repos
						</Link>
					</h3>
					<p className="text-sm text-muted-foreground">github.com/blefnk</p>
				</div>
			</div>
		</section>
	</Card>
);
