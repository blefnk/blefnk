"use client";

import NoiseEffect from "🐈/ui/components/noise-effect";
import { ThemeToggle } from "🐈/ui/components/theme-toggle";
import { Button } from "🐈/ui/primitives/button";
import { Card } from "fumadocs-ui/components/card";
import { Download, Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function CV() {
	/* ref that points to the portion to be printed */
	const contentRef = useRef<HTMLDivElement>(null);

	const handlePrint = useReactToPrint({
		contentRef,
		documentTitle: "nazarii-korniienko-cv",
		pageStyle: `
      @media print {
        @page { size: A4; margin: 20mm; }
        html, body { height: initial !important; -webkit-print-color-adjust: exact; }
      }
    `,
	});

	return (
		<main className="min-h-screen bg-background text-foreground font-mono relative">
			<NoiseEffect />
			<div aria-hidden="true" className="scanlines" />

			<div className="container mx-auto px-4 py-12 max-w-4xl">
				<header className="flex justify-between items-center mb-8">
					<Link className="brutal-button px-4 py-2" href="/">
						&larr; back
					</Link>

					<div>
						<ThemeToggle />
						{/* client-side PDF via react-to-print */}
						<Button
							aria-label="Download CV as PDF"
							className="brutal-button inline-flex items-center gap-2 text-zinc-500"
							onClick={() => handlePrint()}
						>
							<Download className="h-4 w-4" />
							print / download pdf
						</Button>
					</div>
				</header>

				{/* everything inside contentRef is what will be printed */}
				<div ref={contentRef}>
					<Card
						className="brutal-card p-8 print:shadow-none print:border-black"
						title=" "
					>
						<header className="mb-8 pb-2">
							<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
								<div>
									<h1 className="text-4xl font-bold mb-2">Nazar Kornienko</h1>
									<p className="text-xl text-muted-foreground">
										Node & Next.js Developer
									</p>
								</div>

								<nav
									aria-label="social links"
									className="flex gap-3 print:hidden"
								>
									<Link href="mailto:blefnk@gmail.com">
										<Button
											aria-label="Email Nazar"
											className="brutal-button"
											size="icon"
											variant="outline"
										>
											<Mail className="h-5 w-5" />
										</Button>
									</Link>
									<Link
										href="https://github.com/blefnk"
										rel="noopener noreferrer"
										target="_blank"
									>
										<Button
											aria-label="GitHub profile"
											className="brutal-button"
											size="icon"
											variant="outline"
										>
											<Github className="h-5 w-5" />
										</Button>
									</Link>
									<Link
										href="https://x.com/blefnk"
										rel="noopener noreferrer"
										target="_blank"
									>
										<Button
											aria-label="Twitter profile"
											className="brutal-button"
											size="icon"
											variant="outline"
										>
											<Twitter className="h-5 w-5" />
										</Button>
									</Link>
								</nav>
							</div>

							<div className="mt-6">
								<p className="text-lg">
									Focused on clean developer experience, honest user experience,
									and tools people actually want to use.
								</p>
							</div>
						</header>

						<section className="mb-8">
							<h2 className="text-2xl font-bold mb-4 border-b border-foreground pb-2">
								Skills
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<h3 className="text-xl font-bold mb-2">Technical</h3>
									<ul className="space-y-2">
										<li className="flex items-center gap-2">
											<span className="text-xl">→</span>
											<span>JavaScript / TypeScript</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="text-xl">→</span>
											<span>Bun / Node.js / Hono</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="text-xl">→</span>
											<span>Next.js / React</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="text-xl">→</span>
											<span>Tailwind CSS / UI Design</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="text-xl">→</span>
											<span>API Development</span>
										</li>
									</ul>
								</div>
								<div>
									<h3 className="text-xl font-bold mb-2">Soft Skills</h3>
									<ul className="space-y-2">
										<li className="flex items-center gap-2">
											<span className="text-xl">→</span>
											<span>Developer Experience</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="text-xl">→</span>
											<span>Open Source Contribution</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="text-xl">→</span>
											<span>Technical Writing</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="text-xl">→</span>
											<span>Problem Solving</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="text-xl">→</span>
											<span>Community Building</span>
										</li>
									</ul>
								</div>
							</div>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold mb-4 border-b border-foreground pb-2">
								Featured Projects
							</h2>
							<div className="space-y-6">
								<div>
									<h3 className="text-xl font-bold">
										<Link
											className="underline"
											href="https://reliverse.org/repos/blefnk/relivator"
										>
											Relivator
										</Link>
									</h3>
									<p className="text-muted-foreground mb-2">
										Next.js/Polar/Better-Auth Template
									</p>
									<p>
										A comprehensive Next.js template focused on developer
										experience and modern authentication patterns. Built to
										eliminate boilerplate and accelerate project development.
									</p>
								</div>

								<div>
									<h3 className="text-xl font-bold">
										<Link
											className="underline"
											href="https://reliverse.org/repos/blefnk/versator"
										>
											Versator
										</Link>
									</h3>
									<p className="text-muted-foreground mb-2">
										Next.js/Stripe/Clerk Template
									</p>
									<p>
										A production-ready template for SaaS applications with
										integrated payment processing and authentication. Designed
										for rapid deployment of commercial web applications.
									</p>
								</div>

								<div>
									<h3 className="text-xl font-bold">
										<Link
											className="underline"
											href="https://reliverse.org/repos/reliverse/rse"
										>
											Rse
										</Link>
									</h3>
									<p className="text-muted-foreground mb-2">@reliverse/rse</p>
									<p>
										All-in-one, AI-powered companion for building, improving,
										and managing web projects. Whether you're starting from
										scratch or upgrading an existing app, rse brings together
										project bootstrapping, refactoring, automation, bundling,
										and more—right in your terminal.
									</p>
								</div>
							</div>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold mb-4 border-b border-foreground pb-2">
								Open Source Contributions
							</h2>
							<p className="mb-4">
								Active contributor to the JS and TS ecosystem, with a focus on
								developer tools, templates, and utilities that improve the
								development experience.
							</p>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="brutal-card p-4">
									<h3 className="font-bold">
										<Link
											className="underline"
											href="https://reliverse.org/repos/reliverse"
											rel="noopener noreferrer"
											target="_blank"
										>
											Node Related Repos
										</Link>
									</h3>
									<p className="text-sm text-muted-foreground">
										github.com/reliverse
									</p>
								</div>
								<div className="brutal-card p-4">
									<h3 className="font-bold">
										<Link
											className="underline"
											href="https://reliverse.org/repos/blefnk"
											rel="noopener noreferrer"
											target="_blank"
										>
											Web Related Repos
										</Link>
									</h3>
									<p className="text-sm text-muted-foreground">
										github.com/blefnk
									</p>
								</div>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold mb-4 border-b border-foreground pb-2">
								Contact
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<h3 className="text-xl font-bold mb-2">Email</h3>
									<p>
										<Link className="underline" href="mailto:blefnk@gmail.com">
											blefnk@gmail.com
										</Link>
									</p>
								</div>

								<div>
									<h3 className="text-xl font-bold mb-2">Social</h3>
									<ul className="space-y-2">
										<li>
											<Link
												className="underline"
												href="https://x.com/blefnk"
												rel="noopener noreferrer"
												target="_blank"
											>
												x.com/blefnk
											</Link>
										</li>
										<li>
											<Link
												className="underline"
												href="https://discord.gg/Pb8uKbwpsJ"
												rel="noopener noreferrer"
												target="_blank"
											>
												discord.gg/Pb8uKbwpsJ
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</section>

						<footer className="mt-12 pt-6 max-w-3xl border-t border-foreground text-center text-muted-foreground">
							<p>
								"I build so humans and machines get it. No dark patterns. No
								growth hacks. Just focused software that works."
							</p>
						</footer>
					</Card>
				</div>
			</div>
		</main>
	);
}
