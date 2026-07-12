import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const pageTitle = `${project.title} — Case Study`;
  const socialTitle = `${project.title} — Case Study | Ali Hamza`;
  const description = project.summary;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: `/work/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const prevProject = projects[projectIndex === 0 ? projects.length - 1 : projectIndex - 1];
  const nextProject = projects[projectIndex === projects.length - 1 ? 0 : projectIndex + 1];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `https://alihamzamughal.dev/work/${project.slug}#work`,
        "name": project.title,
        "url": `https://alihamzamughal.dev/work/${project.slug}`,
        "description": project.summary,
        "image": `https://alihamzamughal.dev${project.heroImage}`,
        "dateCreated": project.year,
        "genre": project.category,
        "keywords": project.tools.join(", "),
        "creator": { "@id": "https://alihamzamughal.dev/#person" },
        "about": {
          "@type": "Organization",
          "name": project.client,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://alihamzamughal.dev/work/${project.slug}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://alihamzamughal.dev" },
          { "@type": "ListItem", "position": 2, "name": "Work", "item": "https://alihamzamughal.dev/work" },
          { "@type": "ListItem", "position": 3, "name": project.title, "item": `https://alihamzamughal.dev/work/${project.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ProjectDetailClient project={project} prevProject={prevProject} nextProject={nextProject} />
    </>
  );
}
