
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Sparkles } from 'lucide-react';

interface TrendingContentProps {
  trends: { trend: string; relevance: number }[];
}

const TrendingContent = ({ trends }: TrendingContentProps) => {
  return (
    <Card className="overflow-hidden border-border">
      <CardHeader className="py-3 px-4 bg-secondary/50 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Sparkles size={16} className="text-creator-purple" />
          Trending Content Types
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {trends.length > 0 ? (
          <div className="space-y-4">
            {trends.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{item.trend}</span>
                  <span className="text-sm text-muted-foreground">{Math.round(item.relevance * 100)}%</span>
                </div>
                <Progress value={item.relevance * 100} className="bg-creator-purple" />
              </div>
            ))}
            <p className="text-xs text-muted-foreground mt-2">
              These content types are currently trending in this category and may help increase viewer engagement.
            </p>
          </div>
        ) : (
          <div className="h-14 flex items-center justify-center text-sm text-muted-foreground italic">
            Generate content to see trending content types
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TrendingContent;
