import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TProjects } from '@/constants';
import { Button } from '@/components//ui/button';

const ProjectCard: React.FC<TProjects> = ({
  name,
  desc,
  gitLink,
  snap,
  demoLink,
}) => {
  return (
    <Card className="w-60">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <Separator />
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={snap} alt="project_snap" className="w-80 h-24" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button size={'sm'} className="rounded-xl" variant="outline">
          <a href={gitLink} target="_blank" className="no-underline">
            Code
          </a>
        </Button>
        {demoLink && (
          <Button size={'sm'} className="rounded-xl">
            <a href={demoLink} target="_blank" className="no-underline">
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export { ProjectCard };
