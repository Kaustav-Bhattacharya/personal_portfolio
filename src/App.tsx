import { ThemeProvider } from './components/ui/theme-provider';
import { Footer, Home, NavBar } from './layout';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full md:w-4/5 lg:w-3/5">
          <NavBar />
          <Home />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
