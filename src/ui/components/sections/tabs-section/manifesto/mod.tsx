import type { FC } from "react";

import { Card } from "fumadocs-ui/components/card";

import {
	ManifestoBelief,
	ManifestoLoveList,
	ManifestoOssVision,
	ManifestoRejectList,
} from "./impl";
import { ManifestoSection } from "./utils";

export const ManifestoTab: FC = () => (
	<Card className="brutal-card p-6" title="manifesto">
		<h2 className="mb-4 text-lg font-semibold text-zinc-500">
			(a scream from a soul that still knows how it feels to breathe while the
			world turns cold, plastic, and hollow.)
		</h2>
		<div className="space-y-8 text-lg leading-relaxed prose prose-neutral dark:prose-invert">
			<ManifestoSection emoji="🤗" title="what i love">
				<ManifestoLoveList />
			</ManifestoSection>

			<hr className="border-t border-zinc-300 dark:border-zinc-700 my-4" />

			<ManifestoSection emoji="🫷🫸" title="what i reject">
				<ManifestoRejectList />
			</ManifestoSection>

			<hr className="border-t border-zinc-300 dark:border-zinc-700 my-4" />

			<ManifestoSection emoji="🧠" title="what i believe">
				<ManifestoBelief />
			</ManifestoSection>

			<hr className="border-t border-zinc-300 dark:border-zinc-700 my-4" />

			<ManifestoSection emoji="👀" title="what is my/reliverse oss vision">
				<ManifestoOssVision />
			</ManifestoSection>
		</div>
	</Card>
);
