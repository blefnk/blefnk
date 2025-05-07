import type { FC } from "react";

import Link from "next/link";

export const ManifestoLoveList: FC = () => (
	<ul className="ml-6 list-disc space-y-2">
		<li>ukraine, ukrainian language & culture — non-negotiable</li>
		<li>
			reliverse & bleverse — my own multiverse{" "}
			<Link
				className="text-zinc-500 underline-offset-8"
				href="https://lore.bleverse.com"
				rel="noopener noreferrer"
				target="_blank"
			>
				(learn more)
			</Link>
		</li>
		<li>honest ux, clean dx</li>
		<li>tools with soul, not just specs</li>
		<li>open source that feels like a mixtape</li>
		<li>tools that innovate the way we work — like cursor, obsidian, polar</li>
		<li>
			devs who build because they're <em>passionate</em>, not for linkedin claps
		</li>
		<li>fast, safe, clean, sharp things — bun/ts/..., esm/modularity/...</li>
		<li>brutal interfaces with honest intent</li>
		<li>
			weird ideas that make sense <em>after</em> 2am
		</li>
		<li>writing code like it's poetry, not paperwork</li>
		<li>people who ship things even when no one claps</li>
		<li>dark satire, brutal humor, anti-corporate vibes</li>
		<li>writing texts where every sentence cuts or heals</li>
		<li>empathy, emotion, interaction — even in cli apps</li>
	</ul>
);

export const ManifestoRejectList: FC = () => (
	<ul className="ml-6 list-disc space-y-2">
		<li>russia, russian culture & language — zero tolerance</li>
		<li>
			code that never asks: <em>how will this feel to touch?</em>
		</li>
		<li>tools that treat devs like clickers, not creators</li>
		<li>ai-generated content/code that smells like a scam</li>
		<li>vibe coding obsession — blind prompting ≠ real building</li>
		<li>design systems with no pulse — soulless grids and tokens</li>
		<li>anyone backing autocrats — in action or in silence — get out</li>
		<li>overengineered js — class & this where it's not truly needed</li>
		<li>docker everywhere — especially where it's not truly needed</li>
		<li>hustle culture with no heart — grind isn't a personality</li>
		<li>coaching scams, webinar traps, growth hacks for ghosts</li>
		<li>fluff without fire — words should bleed or be silent</li>
	</ul>
);

export const ManifestoBelief: FC = () => (
	<div className="space-y-4">
		<p>
			code should feel.
			<br />
			users should trust.
			<br />
			creators should be weird, emotional, <em>alive</em>.<br />
			coding isn't just logic — it's identity.
			<br />i build things that feel like rebellion.
			<br />
			not to win — to <em>mean</em> something.
		</p>
		<p>
			you don't need permission to care.
			<br />
			you just need to <em>still be human</em> in the middle of all this.
			<br />
			this is not about productivity. this is about not going numb.
		</p>
		<p>
			<strong>how i live this: </strong>
			<br />- i ask "how will this feel?" before I ship.
			<br />- i believe rebellion is better with friends.
			<br />- i invite anyone who cares to join, question, remix.
			<br />- i celebrate the honest, the weird, the broken (in a good way).
		</p>
	</div>
);

export const ManifestoOssVision: FC = () => (
	<div className="space-y-4">
		<i className="text-zinc-500">
			below are tips tailored specifically for oss projects.
		</i>
		<p>
			build your oss with the end in mind.
			<br />
			no gatekeeping. no copyright ego.
		</p>
		<p>
			your project isn't eternal. neither are you.
			<br />
			so leave something that <em>can evolve</em> without you.
		</p>
		<p>
			<strong>make it mit. </strong>
			<br />
			let the next dev fork it, twist it, make it scream in new ways.
			<br />
			let society remix your knowledge.
		</p>
		<p>
			<em>don't freeze the future just because your ego needs closure.</em>
		</p>
		<p>
			for example: <strong>unjs gave everything under mit. </strong>
			because of that,{" "}
			<strong>reliverse could build something even better </strong>
			on top of their brilliance. this is the spirit of oss.
		</p>
		<p>
			and if your project is more than just code — if it's stories, docs, art,
			or lore —
			<br />
			<strong>let your content breathe too. </strong>
			<br />
			use <strong>creative commons</strong> for your words, images, and worlds.
			<br />
			<span className="text-zinc-500">
				(mit for code, cc for content — the classic handshake)
			</span>
			<br />
			let your ideas travel further than your repo.
		</p>
		<p>
			but what if your project is a hot pie for investors?
			<br />
			then fine, <strong>use apache-2.0</strong> or something like that what
			don't cracks people with good intentions hands. at least it's still a
			handshake, not a chokehold.
		</p>
		<p>
			what about theft? some corps love it, you know. agpl? no, if you think
			using agpl will "protect" your soul from corporate greed —
			<br />
			here's the truth:
		</p>
		<p className="italic">
			it won't. corps will find loopholes.
			<br />
			and real creators — the ones who would actually build something better —
			<br />
			you'll just break their fingers with bureaucracy.
		</p>
		<p>
			and the most funny part? llms.
			<br />
			llms won't even blink at your agpl.
			<br />
			they'll scrape, train, remix —
			<br />
			and you'll be another forgotten atom in the next trillion-parameter model.
		</p>
		<p>
			open source is a gift, not a cage.
			<br />
			if you want your code to outlive you — let it breathe.
			<br />
			don't make a cage around your code — let it become a new story.
		</p>
	</div>
);
