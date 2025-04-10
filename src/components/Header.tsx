
import React from 'react';
import { YoutubeIcon, LogIn } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  // This function would handle YouTube authentication
  const handleYouTubeSignUp = () => {
    // In a real implementation, this would redirect to YouTube OAuth
    window.open('https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=https://www.googleapis.com/auth/youtube&response_type=token', '_blank');
    
    // For demo purposes, we'll just show an alert
    alert('In a full implementation, this would connect to YouTube OAuth');
  };

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
          
          <Button 
            variant="outline"
            size="sm" 
            className="flex items-center gap-1 border-creator-purple text-creator-purple hover:bg-creator-purple/10"
            onClick={handleYouTubeSignUp}
          >
            <YoutubeIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Sign up with YouTube</span>
            <span className="sm:hidden">Sign up</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
