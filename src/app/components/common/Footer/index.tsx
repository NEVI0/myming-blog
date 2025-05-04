import { Instagram, Linkedin, Github } from 'lucide-react';

import { VerticalDivider } from '@app/components/ui';
import { DeveloperCard, SocialLink } from './components';

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full border-t border-gray-300">
      <div className="flex flex-col gap-8 md:flex-row md:gap-0 items-center justify-between h-full w-6xl mx-auto p-8">
        <DeveloperCard />

        <nav className="flex items-center gap-4 h-full">
          <SocialLink
            href="https://www.instagram.com/nevio_costa/"
            icon={<Instagram />}
          />

          <VerticalDivider />

          <SocialLink
            href="https://www.linkedin.com/in/n%C3%A9vio-magagnin-045710177/"
            icon={<Linkedin />}
          />

          <VerticalDivider />

          <SocialLink href="https://github.com/NEVI0" icon={<Github />} />
        </nav>
      </div>
    </footer>
  );
}
