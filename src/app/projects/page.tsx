import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import path from "path";
import { promises as fs } from "fs";
import Image from "next/image";


async function getProjects() {
  const filePath = path.join(process.cwd(), "src/app", "project.json"); // Ensure the path is correct
  const data = JSON.parse(await fs.readFile(filePath, "utf8"));
  return data.projects;
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">My Projects</h1>
      <BentoGrid className="lg:grid-rows-3">
        {projects.map((project) => (
          // console.log(project.background)
          <BentoCard
            key={project.name}
            name={project.name}
            description={project.description}
            href={project.github || project.devpost || "#"} // Fallback link
            cta="Learn more"
            // background={project.background} // Apply dynamic styles
            className={project.className} // Layout classes
          />
        ))}
      </BentoGrid>
    </div>
  );
}
