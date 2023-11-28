import { Moon, Sun } from 'lucide-react';

import { useTheme } from '../ui/theme-provider';
import { Toggle } from '../ui/toggle';
import { useEffect, useState } from 'react';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [pressed, setPressed] = useState(theme === 'system');

  useEffect(() => {
    pressed ? setTheme('dark') : setTheme('light');
  }, [pressed]);

  return (
    <Toggle
      pressed={pressed}
      onPressedChange={() => {
        setPressed(!pressed);
      }}
      variant="default"
      className="rounded-full"
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </Toggle>
  );
};

export { ThemeToggler };
