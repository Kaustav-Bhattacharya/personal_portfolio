import { projects } from '@/constants';
import { ProjectCard } from '.';

const Work = () => {
  return (
    <div className="w-full max-w-4xl mt-8 flex flex-col items-center">
      <h2 className="text-2xl text-dark ">Projects</h2>
      <div className="flex flex-wrap justify-center gap-5 my-9">
        {projects.map((project) => (
          <div className="w-fullp-4" key={project.gitLink}>
            <ProjectCard
              desc={project.desc}
              name={project.name}
              gitLink={project.gitLink}
              snap={project.snap}
              demoLink={project.demoLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Work };
