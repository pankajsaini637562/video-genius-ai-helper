
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CopyIcon, CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

interface ResultCardProps {
  title: string;
  content: string;
  className?: string;
  icon?: React.ReactNode;
}

const ResultCard = ({ title, content, className, icon }: ResultCardProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    if (!content) return;
    
    navigator.clipboard.writeText(content);
    setCopied(true);
    
    toast({
      title: "Copied to clipboard",
      description: `${title} has been copied to your clipboard.`,
      duration: 3000,
    });
    
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className={cn("overflow-hidden border-border", className)}>
      <CardHeader className="py-3 px-4 bg-secondary/50 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          {icon && <span className="text-creator-purple">{icon}</span>}
          {title}
        </CardTitle>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-7 w-7" 
          onClick={handleCopy}
          disabled={!content || copied}
        >
          {copied ? (
            <CheckIcon className="h-4 w-4 text-green-500" />
          ) : (
            <CopyIcon className="h-4 w-4" />
          )}
        </Button>
      </CardHeader>
      <CardContent className="p-4">
        {content ? (
          <div className="text-sm">
            {content.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < content.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className="h-14 flex items-center justify-center text-sm text-muted-foreground italic">
            Content will appear here
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResultCard;
