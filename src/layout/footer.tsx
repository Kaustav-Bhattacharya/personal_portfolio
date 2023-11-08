import React from 'react';

import { TSocialLinkProps } from './types';
import { GITHUB, linkedin } from '@/assets';
import { personalInfo } from '@/constants';

const Footer: React.FC = () => (
  <footer className="w-full  p-4 flex items-center justify-center h-16">
    <div className="flex gap-5 items-center m-5">
      <SocialLink
        href={personalInfo.social.github}
        imgSrc={GITHUB}
        imgAlt="GitHub"
        imgHeight={8}
      />
      <SocialLink
        href={personalInfo.social.linkedin}
        imgSrc={linkedin}
        imgAlt="LinkedIn"
        imgHeight={8}
      />
    </div>
    <p className="text-center">
      &copy; KAUSTAV BHATTACHARYA | {new Date().getFullYear()}
    </p>
  </footer>
);

const SocialLink: React.FC<TSocialLinkProps> = ({
  href,
  imgSrc,
  imgAlt,
  imgHeight,
}) => (
  <a href={href} target="_blank" rel="noreferrer">
    <img src={imgSrc} alt={imgAlt} className={`h-${imgHeight}`} />
  </a>
);

export { Footer };
