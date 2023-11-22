import { Logo, NavItem, ThemeToggler } from '@/components/nav';
import { NavList } from '@/constants';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  return (
    <nav
      className="
      h-12 
      flex
      justify-between 
      items-center 
      mx-auto 
      p-6
      fixed
      bottom-0
      w-full
      z-10
      sm:fixed
      sm:top-0
      shadow-sm
      bg-background
      nav
      "
    >
      <Logo />
      <div className="flex justify-between w-auto items-center gap-5">
        <ul className="hidden sm:flex sm:justify-evenly gap-5">
          {NavList.map((nav) => (
            <NavItem
              key={nav.href}
              href={nav.href}
              icon={nav.icon}
              title={nav.title}
            />
          ))}
        </ul>
        <ThemeToggler />

        <Sheet>
          <SheetTrigger asChild className="block sm:hidden">
            <Button variant="ghost">
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side={'bottom'}>
            <ul className="flex items-center justify-evenly">
              {NavList.map((nav) => (
                <NavItem
                  key={nav.href}
                  href={nav.href}
                  icon={nav.icon}
                  title={nav.title}
                />
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export { NavBar };
