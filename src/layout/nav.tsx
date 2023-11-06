import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LOGO } from "@/assets";

const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-5">
      <div>
        <Avatar className="ml-5 h-10">
          <AvatarImage src={LOGO} />
          <AvatarFallback>KB</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export { NavBar };
