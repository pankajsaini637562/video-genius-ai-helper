
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CopyIcon, CheckIcon, LightbulbIcon } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface AlternativeTitlesProps {
  titles: string[];
}

const AlternativeTitles = ({ titles }: AlternativeTitlesProps) => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);
  const { toast } = useToast();

  const handleCopy = (title: string, index: number) => {
    navigator.clipboard.writeText(title);
    setCopiedIndex(index);
    
    toast({
      title: "Copied to clipboard",
      description: "Alternative title has been copied to your clipboard.",
      duration: 3000,
    });
    
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Card className="overflow-hidden border-border">
      <CardHeader className="py-3 px-4 bg-secondary/50 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <LightbulbIcon size={16} className="text-creator-purple" />
          Alternative Titles
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {titles.length > 0 ? (
          <ul className="space-y-2">
            {titles.map((title, index) => (
              <li key={index} className="flex items-center justify-between bg-secondary/10 p-2 rounded">
                <span className="text-sm flex-1">{title}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-7 w-7 ml-2" 
                  onClick={() => handleCopy(title, index)}
                  disabled={copiedIndex === index}
                >
                  {copiedIndex === index ? (
                    <CheckIcon className="h-4 w-4 text-green-500" />
                  ) : (
                    <CopyIcon className="h-4 w-4" />
                  )}
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="h-14 flex items-center justify-center text-sm text-muted-foreground italic">
            Generate content to see alternative titles
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AlternativeTitles;
