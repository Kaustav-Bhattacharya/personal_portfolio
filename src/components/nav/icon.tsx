import * as LucideIcons from 'lucide-react';
import React from 'react';

interface IconProps {
  name: string;
  color?: string;
  size?: number | string;
}

const NavIcon: React.FC<IconProps> = ({ name, color, size = 18 }) => {
  const LucideIcon = (LucideIcons as any)[name];

  return <LucideIcon color={color} size={size} className="block sm:hidden" />;
};

export default NavIcon;
