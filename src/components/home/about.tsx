import { personalInfo } from '@/constants';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

const skillAnimationVariant = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    transition: {
      ease: "easeIn",
      delay: 0.1 * index,
    },
  }),
};

const About: React.FC = () => {
  return (
    <div id="about" className="mt-16 flex justify-center items-center">
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center md:justify-start">
            <img
              src={personalInfo.displayImage}
              alt="kaustav"
              className="w-64 h-64 rounded-full shadow-lg mb-5"
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

        <div className="mt-16 flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold text-dark text-center">
            My Skills
          </h3>
          <div className="flex justify-center items-center mt-4 w-3/4">
            <div className="flex flex-wrap gap-2 md:gap-2">
              {personalInfo.skills.map((skill, index) => (
                <motion.div
                  variants={skillAnimationVariant}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                  key={index}
                  className="
                    p-2.5
                    px-6
                    text-sm 
                    w-auto
                    bg-background 
                    rounded 
                    font-semibold 
                    text-muted-foreground
                    transition 
                    duration-300 
                    ease-in-out 
                    hover:text-foreground
                    hover:bg-muted
                    shadow-md
                    "
                >
                  {skill.title}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { About };
