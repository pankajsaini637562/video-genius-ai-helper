
import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingOverlayProps {
  isLoading: boolean;
  className?: string;
}

const LoadingOverlay = ({ isLoading, className }: LoadingOverlayProps) => {
  if (!isLoading) return null;
  
  return (
    <div className={cn(
      "absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center z-50",
      className
    )}>
      <div className="flex flex-col items-center">
        <Loader2 className="h-10 w-10 text-creator-purple animate-spin mb-4" />
        <div className="text-center">
          <h3 className="font-medium text-lg mb-1">Generating content...</h3>
          <p className="text-sm text-muted-foreground">
            Our AI is crafting the perfect content for your video
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
