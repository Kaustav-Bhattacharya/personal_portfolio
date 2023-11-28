import React from 'react';
import NavIcon from './icon';

type TNavIem = {
  href: string;
  icon: string;
  title: string;
};

const NavItem: React.FC<TNavIem> = ({ href, icon, title }) => {
  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const targetId = href.substring(1); // Remove the "#" from the href
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbar = document.querySelector('.nav'); 
      const navbarHeight = navbar ? navbar.clientHeight : 0;

      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <li>
      <a
        href={href}
        className="
          nav-link 
          text-primary-accent 
          hover:text-primary 
          font-medium 
          font-var(--body-font)
          transition-colors 
          duration-300
          flex
          flex-col
          items-center
          justify-center
          "
        onClick={scrollToSection}
      >
        <NavIcon name={icon} />
        {title}
      </a>
    </li>
  );
};

export { NavItem };
