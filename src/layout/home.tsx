import { About,Work } from "@/components/home";


const Home: React.FC = () => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <About />
      <Work/>
    </div>
  );
};

export { Home };
