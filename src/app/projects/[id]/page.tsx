import type { Metadata } from "next";
import type { Project, ProjectId } from "scripts/ts-to-md/types";

import NoiseEffect from "🐈/ui/components/noise-effect";
import ProjectCard from "🐈/ui/components/project-card";
import { Badge } from "🐈/ui/primitives/badge";
import { Button } from "🐈/ui/primitives/button";
import { Card } from "fumadocs-ui/components/card";
import {
	ArrowLeft,
	BookText,
	CheckCircle,
	Clock,
	ExternalLink,
	GitBranch,
	Github,
	Tag,
	Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AVAILABLE_CATEGORIES } from "scripts/ts-to-md/constants";
import { projects } from "scripts/ts-to-md/projects";
import {
	getProjectById,
	getRelatedProjects,
	normalizeWhoUses,
} from "scripts/ts-to-md/utils";

type ProjectPageProps = {
	params: Promise<{
		id: ProjectId;
	}>;
};

export async function generateMetadata({
	params,
}: ProjectPageProps): Promise<Metadata> {
	const { id } = await params;
	const project = getProjectById(projects, id);

	if (!project) {
		return {
			description: "The requested project could not be found.",
			title: "Project Not Found",
		};
	}

	return {
		description: project.description,
		keywords: project.tags.join(", "),
		openGraph: {
			description: project.description,
			images:
				project.screenshots.length > 0
					? [
							{
								alt: `${project.title} screenshot or logo`,
								url: project.screenshots[0],
							},
						]
					: undefined,
			title: project.title,
			type: "website",
		},
		title: `${project.title} | Project Details`,
	};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { id } = await params;
	const project = getProjectById(projects, id);

	if (!project) {
		notFound();
	}

	const relatedProjects = getRelatedProjects(projects, id, 2);

	const getRepoUrl = () => {
		return project.link;
	};

	const repoUrl = getRepoUrl();
	const categoryInfo = AVAILABLE_CATEGORIES[project.category];

	return (
		<main className="min-h-screen bg-background text-foreground font-mono relative">
			<NoiseEffect />
			<div aria-hidden="true" className="scanlines" />

			<div className="container mx-auto px-4 py-12 max-w-4xl">
				<div className="flex justify-between items-center mb-8">
					<Link
						className="brutal-button px-4 py-2 flex items-center gap-2 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
						href="/"
					>
						<ArrowLeft aria-hidden="true" className="h-4 w-4" />
						<span>back home</span>
					</Link>
				</div>

				<Card className="brutal-card p-6 md:p-8 mb-8" title={project.title}>
					<ProjectHeader
						categoryInfo={categoryInfo}
						project={project}
						repoUrl={repoUrl}
					/>

					<ProjectAbout description={project.longDescription} />

					<ProjectFeatures features={project.features} />

					<ProjectScreenshots project={project} />

					<ProjectUsers users={normalizeWhoUses(project.whoUses)} />

					<ProjectDivider projectId={project.id} />

					<ProjectMetaTech project={project} />

					<ProjectMetaTags project={project} />

					<RelatedProjects projects={relatedProjects} />
				</Card>

				<ProjectFooter />
			</div>
		</main>
	);
}

function ProjectAbout({ description }: { description: string }) {
	return (
		<section aria-labelledby="about-heading" className="mb-8">
			<SectionHeading id="about-heading">about this project</SectionHeading>
			<p className="whitespace-pre-line text-base md:text-lg">{description}</p>
		</section>
	);
}

function ProjectDivider({ projectId }: { projectId: string }) {
	return (
		<div className="relative h-8 mb-8 overflow-hidden">
			<div className="absolute inset-0 flex items-center">
				<div className="w-full border-t border-foreground" />
			</div>
			<div className="absolute inset-0 flex items-center justify-center">
				<span
					aria-hidden="true"
					className="glitch-text px-4 bg-background"
					data-text={projectId}
				>
					{projectId}
				</span>
			</div>
		</div>
	);
}

function ProjectFeatures({ features }: { features: string[] }) {
	if (!features || features.length === 0) return null;

	return (
		<section aria-labelledby="features-heading" className="mb-8">
			<SectionHeading id="features-heading">features</SectionHeading>
			<ul className="space-y-2 pl-2">
				{features.map((feature: string) => (
					<li className="flex items-start gap-2" key={feature}>
						<span aria-hidden="true" className="text-lg text-muted-foreground">
							→
						</span>
						<span>{feature}</span>
					</li>
				))}
			</ul>
		</section>
	);
}

function ProjectFooter() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="text-center text-muted-foreground text-sm mt-12">
			<p>
				© {currentYear} Nazarii Korniienko
				<br />
				All rights reserved
			</p>
		</footer>
	);
}

function ProjectHeader({
	categoryInfo,
	project,
	repoUrl,
}: {
	categoryInfo: undefined | { title: string };
	project: Project;
	repoUrl: string;
}) {
	return (
		<header className="mb-8">
			<div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
				<div className="flex items-center gap-3 mb-2 sm:mb-0">
					<span aria-hidden="true" className="text-4xl">
						{project.icon}
					</span>
					{/* <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1> */}
				</div>

				<div className="flex flex-wrap gap-2 items-center">
					<Badge className="flex items-center gap-1" variant="outline">
						<GitBranch aria-hidden="true" className="h-3 w-3" />
						<span>v{project.ver}</span>
					</Badge>
					{categoryInfo && (
						<Badge className="flex items-center gap-1" variant="outline">
							<Tag aria-hidden="true" className="h-3 w-3" />
							<span>{categoryInfo.title}</span>
						</Badge>
					)}
					{project.oss && (
						<Badge className="flex items-center gap-1" variant="outline">
							<CheckCircle
								aria-hidden="true"
								className="h-3 w-3 text-green-500"
							/>
							<span>Open Source</span>
						</Badge>
					)}
					{project.soon && (
						<Badge className="flex items-center gap-1" variant="destructive">
							<Clock aria-hidden="true" className="h-3 w-3" />
							<span>Planned / Soon</span>
						</Badge>
					)}
				</div>
			</div>

			<div className="flex flex-wrap gap-3 mt-6">
				<ProjectLinks project={project} repoUrl={repoUrl} />
			</div>
		</header>
	);
}

function ProjectLinks({
	project,
	repoUrl,
}: {
	project: Project;
	repoUrl: string;
}) {
	return (
		<>
			{/* GitHub/Repo Link */}
			<Link href={repoUrl} rel="noopener noreferrer" target="_blank">
				<Button className="brutal-button flex items-center gap-2">
					<Github aria-hidden="true" className="h-5 w-5" />
					<span>Repo</span>
				</Button>
			</Link>

			{/* Primary Link (Visit/Demo/Homepage) */}
			<Link href={project.link} rel="noopener noreferrer" target="_blank">
				<Button
					className="brutal-button flex items-center gap-2"
					variant="outline"
				>
					<ExternalLink aria-hidden="true" className="h-5 w-5" />
					<span>Demo</span>
				</Button>
			</Link>

			{/* Documentation Link */}
			{project.docs &&
				project.docs !== project.link &&
				project.docs !== repoUrl && (
					<Link href={project.docs} rel="noopener noreferrer" target="_blank">
						<Button
							className="brutal-button flex items-center gap-2"
							variant="outline"
						>
							<BookText aria-hidden="true" className="h-5 w-5" />
							<span>Docs</span>
						</Button>
					</Link>
				)}
		</>
	);
}

function ProjectMetaTags({ project }: { project: Project }) {
	return (
		<>
			{project.tags.length > 0 && (
				<div className="flex flex-wrap gap-2 mb-12 opacity-70">
					<span className="text-sm font-semibold mr-2">Tags:</span>
					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag: string) => (
							<Badge className="text-xs" key={tag} variant="secondary">
								{tag}
							</Badge>
						))}
					</div>
				</div>
			)}
		</>
	);
}

function ProjectMetaTech({ project }: { project: Project }) {
	return (
		<>
			{project.technologies.length > 0 && (
				<div className="flex flex-wrap gap-2 opacity-70">
					<span className="text-sm font-semibold mr-2">Stack:</span>
					<div className="flex flex-wrap gap-2">
						{project.technologies.map((tech: string) => (
							<span className="brutal-card px-2 py-0.5 text-xs" key={tech}>
								{tech}
							</span>
						))}
					</div>
				</div>
			)}
		</>
	);
}

function ProjectScreenshots({ project }: { project: Project }) {
	if (!project.screenshots || project.screenshots.length === 0) return null;

	return (
		<section aria-labelledby="screenshots-heading" className="mb-8">
			<SectionHeading id="screenshots-heading">screenshots</SectionHeading>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{project.screenshots.map((src: string, index: number) => (
					<div className="brutal-card overflow-hidden" key={src}>
						<Image
							alt={`${project.title} Screenshot ${index + 1}`}
							className="w-full h-auto object-cover"
							height={400}
							loading={index === 0 ? "eager" : "lazy"}
							src={src}
							width={600}
						/>
					</div>
				))}
			</div>
		</section>
	);
}

function ProjectUsers({
	users,
}: {
	users: ReadonlyArray<{ link: string; name: string }>;
}) {
	if (!users || users.length === 0) return null;

	return (
		<section aria-labelledby="users-heading" className="mb-8">
			<SectionHeading id="users-heading">
				<span className="flex items-center gap-2">
					<Users aria-hidden="true" className="h-6 w-6" /> Who Uses This?
				</span>
			</SectionHeading>
			<ul className="space-y-2 pl-2">
				{users.map((user: { link: string; name: string }) => (
					<li className="flex items-center gap-2" key={user.name}>
						<span aria-hidden="true" className="text-lg text-muted-foreground">
							↳
						</span>
						<Link
							className="hover:underline hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded-sm"
							href={user.link}
							rel="noopener noreferrer"
							target="_blank"
						>
							{user.name}{" "}
							<ExternalLink
								aria-hidden="true"
								className="inline h-3 w-3 ml-0.5"
							/>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}

function RelatedProjects({ projects }: { projects: Project[] }) {
	if (!projects || projects.length === 0) return null;

	return (
		<section aria-labelledby="related-heading">
			<SectionHeading id="related-heading">related projects</SectionHeading>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{projects.map((relatedProject: Project) => (
					<Link
						aria-label={`View project: ${relatedProject.title}`}
						className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md block transition-transform hover:scale-[1.01]"
						href={`/projects/${relatedProject.id}`}
						key={relatedProject.id}
					>
						<ProjectCard
							description={relatedProject.description}
							icon={relatedProject.icon}
							isInternal={true}
							link={`/projects/${relatedProject.id}`}
							title={relatedProject.title}
						/>
					</Link>
				))}
			</div>
		</section>
	);
}

function SectionHeading({
	children,
	id,
}: {
	children: React.ReactNode;
	id: string;
}) {
	return (
		<h2
			className="text-2xl font-bold mb-4 border-b border-foreground pb-2"
			id={id}
		>
			{children}
		</h2>
	);
}
