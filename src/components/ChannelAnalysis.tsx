
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Youtube, BarChart3, TrendUp, Users, PlaySquare, Clock } from 'lucide-react';
import { analyzeYoutubeChannel, ChannelAnalysisResult } from '@/utils/channelAnalyzer';

const ChannelAnalysis = () => {
  const [channelUrl, setChannelUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<ChannelAnalysisResult | null>(null);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    if (!channelUrl.trim()) {
      toast({
        variant: "destructive",
        title: "Channel URL is required",
        description: "Please enter a YouTube channel URL to analyze.",
      });
      return;
    }

    try {
      setLoading(true);
      const result = await analyzeYoutubeChannel(channelUrl);
      setAnalysis(result);
      toast({
        title: "Analysis Complete",
        description: "YouTube channel analysis has been completed successfully.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Analysis failed",
        description: "There was an error analyzing the channel. Please check the URL and try again.",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col space-y-4 mb-6">
        <h2 className="text-xl font-semibold flex items-center">
          <Youtube className="mr-2 h-5 w-5 text-creator-purple" />
          YouTube Channel Analysis
        </h2>
        <div className="flex flex-col md:flex-row gap-2">
          <Input
            placeholder="Enter YouTube channel URL (e.g., https://www.youtube.com/@channelname)"
            value={channelUrl}
            onChange={(e) => setChannelUrl(e.target.value)}
            className="flex-grow"
          />
          <Button 
            onClick={handleAnalyze} 
            disabled={loading || !channelUrl.trim()}
            className="bg-creator-purple hover:bg-creator-purple/90"
          >
            {loading ? "Analyzing..." : "Analyze Channel"}
          </Button>
        </div>
      </div>

      {analysis && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="py-3 px-4 bg-secondary/50 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4 text-creator-purple" />
                Audience Insight
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium">Demographic Focus</p>
                  <p className="text-xs text-muted-foreground">{analysis.audienceInsight.demographic}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Engagement Rate</p>
                  <div className="h-2 w-full bg-gray-200 rounded-full mt-1">
                    <div 
                      className="h-2 bg-gradient-to-r from-creator-purple to-creator-accent rounded-full" 
                      style={{ width: `${analysis.audienceInsight.engagementRate * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-right mt-1">{Math.round(analysis.audienceInsight.engagementRate * 100)}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="py-3 px-4 bg-secondary/50 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-creator-purple" />
                Content Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium">Best Performing Content</p>
                  <p className="text-xs text-muted-foreground">{analysis.contentPerformance.bestPerforming}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Average Views</p>
                  <p className="text-sm font-bold">{analysis.contentPerformance.averageViews.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="py-3 px-4 bg-secondary/50 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendUp className="h-4 w-4 text-creator-purple" />
                Growth Potential
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium">Growth Opportunity</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className={`w-5 h-1 rounded-full mx-0.5 ${
                          i < Math.round(analysis.growthPotential.score * 5) 
                            ? 'bg-creator-purple' 
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-xs">{Math.round(analysis.growthPotential.score * 5)}/5</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Recommended Areas</p>
                  <ul className="text-xs text-muted-foreground list-disc list-inside">
                    {analysis.growthPotential.recommendations.map((rec, i) => (
                      <li key={i}>{rec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="py-3 px-4 bg-secondary/50 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <PlaySquare className="h-4 w-4 text-creator-purple" />
                Upload Frequency
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium">Current Schedule</p>
                  <p className="text-xs text-muted-foreground">{analysis.uploadFrequency.currentSchedule}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Recommended Schedule</p>
                  <p className="text-xs text-muted-foreground">{analysis.uploadFrequency.recommendedSchedule}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="py-3 px-4 bg-secondary/50 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4 text-creator-purple" />
                Optimal Content Length
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium">Current Average</p>
                  <p className="text-xs text-muted-foreground">{analysis.optimalLength.currentAverage}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Recommended Length</p>
                  <p className="text-xs text-muted-foreground">{analysis.optimalLength.recommendedLength}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ChannelAnalysis;
