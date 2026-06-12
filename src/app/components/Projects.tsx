import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="my-8">
      <h2 className="font-heading text-3xl text-center">🛠️ PROJECTS</h2>
      {projects.map((project) => (
        <div
          key={project.title}
          className="border-mauve-300/67 border rounded p-4 m-4">
          <h3 className="font-bold text-base/loose tracking-wider">
            {project.title}
          </h3>
          <p>{project.description}</p>
          <div className="flex gap-1">
            {project.stack.map((tech) => (
              <span
                className="border border-mauve-300/50 rounded-full px-3 py-1 my-4 text-sm"
                key={tech}>
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline">
            {project.link_type === "github" ?
              "View on GitHub"
            : "View on Google Drive"}
          </a>
        </div>
      ))}
    </section>
  );
}
