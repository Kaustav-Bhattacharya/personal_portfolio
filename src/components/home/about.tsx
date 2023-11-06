import { personalInfo } from "@/constants";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TechStack: React.FC = () => {
  return (
    <div className="mt-4 flex justify-center items-center">
      <div className="flex flex-wrap p-4 justify-center gap-4 md:gap-5">
        {personalInfo.skills.map((skill, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger>
                <img src={skill.img} alt="skill-icon" className="h-12" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="mt-8 flex justify-center items-center">
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center md:justify-start">
            <img
              src={personalInfo.displayImage}
              alt="kaustav"
              className="w-64 h-64 rounded-full shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-dark">
              Hi !! I am {personalInfo.name},
              <br />
              {personalInfo.designation} !!
            </h2>
            <p className="text-dark font-medium mt-2">{personalInfo.desc}</p>
            <Button className="bg-primary text-white font-semibold py-2 px-4 mt-5">
              <a
                href={personalInfo.resume}
                download="Kaustav_Resume.pdf"
                className="text-white no-underline"
              >
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-dark">
            PROFESSIONAL SUMMARY & COMPETENCIES
          </h3>
          <p className="text-dark font-medium mt-2">{personalInfo.exp}</p>
        </div>

        <div className="mt-3">
          <h3 className="text-xl font-semibold text-dark">SKILL SETS</h3>
          <div className="mt-2">
            <TechStack />
          </div>
        </div>
      </div>
    </div>
  );
};

export { About };
