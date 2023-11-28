import { About, Work } from '@/components/home';

const Home: React.FC = () => {
  return (
    <div id='home' className="mt-10 flex flex-col items-center">
      <About />
      <Work />
    </div>
  );
};

export { Home };
