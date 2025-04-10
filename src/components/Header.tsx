
import React from 'react';
import { YoutubeIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border py-3">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <YoutubeIcon className="h-6 w-6 text-creator-accent" />
          <h1 className="text-xl font-bold text-foreground">
            <span className="text-creator-purple">Video</span>Genius
          </h1>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-xs px-2 py-1 bg-creator-brightPurple/10 text-creator-purple rounded-full">
            AI Creator Assistant
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
