
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart3 } from 'lucide-react';

interface SentimentAnalysisProps {
  score: number;
}

const SentimentAnalysis = ({ score }: SentimentAnalysisProps) => {
  // Helper function to determine sentiment label
  const getSentimentLabel = (score: number): string => {
    if (score > 0.8) return 'Very Positive';
    if (score > 0.6) return 'Positive';
    if (score > 0.4) return 'Neutral';
    if (score > 0.2) return 'Negative';
    return 'Very Negative';
  };

  // Helper function to determine color
  const getSentimentColor = (score: number): string => {
    if (score > 0.8) return 'bg-green-500';
    if (score > 0.6) return 'bg-green-400';
    if (score > 0.4) return 'bg-yellow-400';
    if (score > 0.2) return 'bg-orange-400';
    return 'bg-red-500';
  };

  return (
    <Card className="overflow-hidden border-border">
      <CardHeader className="py-3 px-4 bg-secondary/50 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <BarChart3 size={16} className="text-creator-purple" />
          Content Sentiment Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {score ? (
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{getSentimentLabel(score)}</span>
              <span className="text-sm text-muted-foreground">{Math.round(score * 100)}%</span>
            </div>
            <Progress value={score * 100} className={getSentimentColor(score)} />
            <p className="text-xs text-muted-foreground mt-2">
              {score > 0.6 
                ? 'This content has a positive tone that tends to perform well with audiences.' 
                : score > 0.4 
                  ? 'This content has a neutral tone that performs adequately with most audiences.'
                  : 'This content has a negative tone that may limit engagement with some audiences.'}
            </p>
          </div>
        ) : (
          <div className="h-14 flex items-center justify-center text-sm text-muted-foreground italic">
            Generate content to see sentiment analysis
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SentimentAnalysis;
