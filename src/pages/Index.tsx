
import React, { useState } from 'react';
import Header from '@/components/Header';
import CategorySelector from '@/components/CategorySelector';
import ToneSelector from '@/components/ToneSelector';
import ResultCard from '@/components/ResultCard';
import LoadingOverlay from '@/components/LoadingOverlay';
import { generateVideoContent, VideoContentResult, ContentLength } from '@/utils/aiGenerator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { 
  MessageSquare, 
  Hash, 
  Tag, 
  FileText, 
  Youtube, 
  Wand2, 
  Sparkles,
  BarChart3,
  ListPlus,
  Lightbulb
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContentLengthSelector from '@/components/ContentLengthSelector';
import KeywordSuggestions from '@/components/KeywordSuggestions';
import SentimentAnalysis from '@/components/SentimentAnalysis';
import TrendingContent from '@/components/TrendingContent';
import AlternativeTitles from '@/components/AlternativeTitles';
import ChannelAnalysis from '@/components/ChannelAnalysis';

const Index = () => {
  const [topic, setTopic] = useState('');
  const [category, setCategory] = useState('tech');
  const [tone, setTone] = useState('professional');
  const [contentLength, setContentLength] = useState<ContentLength>('medium');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<VideoContentResult | null>(null);
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'generator' | 'analyzer'>('generator');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!topic.trim()) {
      toast({
        variant: "destructive",
        title: "Topic is required",
        description: "Please enter a video topic or idea to generate content.",
      });
      return;
    }
    
    try {
      setLoading(true);
      const content = await generateVideoContent(topic, category, tone, contentLength);
      setResults(content);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Generation failed",
        description: "There was an error generating your content. Please try again.",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <Header />
      
      <main className="flex-1 container py-6 max-w-3xl relative">
        <LoadingOverlay isLoading={loading} />
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2 text-foreground">
            YouTube Content Generator
          </h1>
          <p className="text-muted-foreground">
            Transform your video ideas into optimized YouTube content with AI
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'generator' | 'analyzer')} className="mb-6">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="generator" className="flex items-center gap-2">
              <Wand2 className="h-4 w-4" />
              <span>Content Generator</span>
            </TabsTrigger>
            <TabsTrigger value="analyzer" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span>Channel Analyzer</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="generator">
            <div className="mb-8 p-6 bg-white rounded-lg border border-border creator-shadow">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="topic" className="mb-1.5 block">
                      Video Topic or Idea
                    </Label>
                    <Input
                      id="topic"
                      placeholder="Enter your video topic (e.g., 'iPhone Photography Tips')"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category" className="mb-1.5 block">
                        Video Category
                      </Label>
                      <CategorySelector
                        value={category}
                        onChange={setCategory}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="tone" className="mb-1.5 block">
                        Content Tone
                      </Label>
                      <ToneSelector
                        value={tone}
                        onChange={setTone}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="contentLength" className="mb-1.5 block">
                      Content Length
                    </Label>
                    <ContentLengthSelector
                      value={contentLength}
                      onChange={setContentLength}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-creator-gradient hover:opacity-90 transition-opacity"
                    disabled={loading || !topic.trim()}
                  >
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate Enhanced Content
                  </Button>
                </div>
              </form>
            </div>

            {(results || loading) && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 text-creator-purple" />
                  AI-Generated Content
                </h2>
                
                <Tabs defaultValue="essentials" className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger value="essentials" className="flex-1">Essentials</TabsTrigger>
                    <TabsTrigger value="advanced" className="flex-1">Advanced</TabsTrigger>
                    <TabsTrigger value="analytics" className="flex-1">Analytics</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="essentials" className="space-y-4 mt-4">
                    <ResultCard
                      title="YouTube Title"
                      content={results?.title || ''}
                      icon={<Youtube size={16} />}
                    />
                    
                    <ResultCard
                      title="Hashtags"
                      content={results?.hashtags || ''}
                      icon={<Hash size={16} />}
                    />
                    
                    <ResultCard
                      title="SEO Tags"
                      content={results?.tags || ''}
                      icon={<Tag size={16} />}
                    />
                    
                    <ResultCard
                      title="Video Description"
                      content={results?.description || ''}
                      icon={<FileText size={16} />}
                      className="mb-8"
                    />
                  </TabsContent>
                  
                  <TabsContent value="advanced" className="space-y-4 mt-4">
                    <AlternativeTitles titles={results?.titleAlternatives || []} />
                    <KeywordSuggestions keywords={results?.keywordSuggestions || []} />
                  </TabsContent>
                  
                  <TabsContent value="analytics" className="space-y-4 mt-4">
                    <SentimentAnalysis score={results?.sentimentScore || 0} />
                    <TrendingContent trends={results?.contentTrends || []} />
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="analyzer">
            <ChannelAnalysis />
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="py-4 border-t border-border">
        <div className="container text-center text-sm text-muted-foreground">
          <p>VideoGenius AI — Your YouTube Content Assistant</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
