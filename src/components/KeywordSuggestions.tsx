
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ListPlusIcon } from 'lucide-react';

interface KeywordSuggestionsProps {
  keywords: string[];
}

const KeywordSuggestions = ({ keywords }: KeywordSuggestionsProps) => {
  return (
    <Card className="overflow-hidden border-border">
      <CardHeader className="py-3 px-4 bg-secondary/50 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <ListPlusIcon size={16} className="text-creator-purple" />
          Keyword Suggestions
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {keywords.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="bg-creator-purple/10 text-creator-purple border-creator-purple/20 hover:bg-creator-purple/20 cursor-pointer"
                onClick={() => navigator.clipboard.writeText(keyword)}
              >
                {keyword}
              </Badge>
            ))}
          </div>
        ) : (
          <div className="h-14 flex items-center justify-center text-sm text-muted-foreground italic">
            Generate content to see keyword suggestions
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default KeywordSuggestions;
