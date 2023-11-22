import { ThemeProvider } from './components/ui/theme-provider';
import { Footer, Home, NavBar } from './layout';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
