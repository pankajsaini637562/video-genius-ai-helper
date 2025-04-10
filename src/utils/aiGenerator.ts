
import { CATEGORIES } from '../components/CategorySelector';
import { TONES } from '../components/ToneSelector';

export interface VideoContentResult {
  title: string;
  hashtags: string;
  tags: string;
  description: string;
  titleAlternatives?: string[];
  keywordSuggestions?: string[];
  sentimentScore?: number;
  contentTrends?: { trend: string; relevance: number }[];
}

export type ContentLength = 'short' | 'medium' | 'long';

// This is a mock function that simulates AI content generation
// In a real app, this would call an AI API like GPT-4
export const generateVideoContent = async (
  topic: string,
  categoryId: string,
  toneId: string,
  contentLength: ContentLength = 'medium'
): Promise<VideoContentResult> => {
  // In a real implementation, this would make an API call to GPT-4 or similar
  // For now, let's simulate a delay and return mock data
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const category = CATEGORIES.find(c => c.id === categoryId)?.name || 'General';
  const tone = TONES.find(t => t.id === toneId)?.name || 'Professional';
  
  // Get a cleaned topic
  const cleanTopic = topic.trim();
  
  // Sample response based on inputs (this would come from the AI in a real app)
  let title: string;
  let hashtags: string;
  let tags: string;
  let description: string;
  let titleAlternatives: string[] = [];
  let keywordSuggestions: string[] = [];
  let sentimentScore: number = 0;
  let contentTrends: { trend: string; relevance: number }[] = [];
  
  if (categoryId === 'tech') {
    title = toneId === 'professional' 
      ? `${cleanTopic} - Complete Overview and Analysis 2025`
      : `I Can't Believe What This ${cleanTopic} Can Do! 🤯 *MIND BLOWN*`;
      
    hashtags = `#${cleanTopic.replace(/\s+/g, '')} #TechReview #LatestTech #TechTutorial`;
    tags = `${cleanTopic}, review, technology, gadget, tech review, tutorial, how-to, new tech 2025`;
    
    // Enhanced generation with length options
    if (contentLength === 'short') {
      description = `Check out this quick overview of ${cleanTopic}!\n\n✅ Key features\n✅ Quick review\n\nFollow for more tech content!`;
    } else if (contentLength === 'long') {
      description = `In this comprehensive deep-dive about ${cleanTopic}, I'm breaking down everything you need to know in extensive detail.\n\n✅ Complete specifications and feature analysis\n✅ In-depth performance tests and comprehensive benchmarks\n✅ Detailed comparison with every competitor on the market\n✅ Long-term durability testing results\n✅ Full price-to-value ratio analysis\n✅ Tips and tricks for power users\n\nCheck out my other detailed tech reviews: [Your Channel Link]\n\nTimestamps:\n00:00 - Introduction\n01:23 - Unboxing Experience\n03:45 - Design & Build Quality\n07:12 - Feature Breakdown\n12:38 - Performance Tests\n18:52 - Comparisons\n24:30 - Pros & Cons\n28:15 - Conclusion`;
    } else {
      description = `In this comprehensive video about ${cleanTopic}, I'm breaking down everything you need to know.\n\n✅ Full specs and features\n✅ Performance tests and benchmarks\n✅ Comparison with competitors\n✅ Is it worth your money?\n\nCheck out my other tech reviews: [Your Channel Link]`;
    }
    
    // Alternative titles
    titleAlternatives = [
      `${cleanTopic} in 2025: Everything You Need to Know`,
      `Why ${cleanTopic} is Changing the Tech Industry`,
      `${cleanTopic} Review: The Good, The Bad, and The Surprising`
    ];
    
    // Keyword suggestions
    keywordSuggestions = [
      `${cleanTopic} review`,
      `${cleanTopic} vs competitors`,
      `best ${cleanTopic} features`,
      `${cleanTopic} price worth it`,
      `${cleanTopic} tutorial`
    ];
    
    // Content trends
    contentTrends = [
      { trend: "Unboxing Experience", relevance: 0.85 },
      { trend: "Performance Benchmarks", relevance: 0.92 },
      { trend: "Price Analysis", relevance: 0.78 }
    ];
    
    // Sentiment score (positive)
    sentimentScore = 0.72;
  } else if (categoryId === 'gaming') {
    title = toneId === 'funny' 
      ? `I Tried ${cleanTopic} So You Don't Have To 😂 *HILARIOUS FAILS*`
      : `${cleanTopic} Gameplay - Advanced Tips & Strategies`;
      
    hashtags = `#${cleanTopic.replace(/\s+/g, '')} #GamerLife #Gaming #GameplayTips`;
    tags = `${cleanTopic}, gameplay, gaming, walkthrough, tips and tricks, strategy, game review`;
    
    // Enhanced generation with length options
    if (contentLength === 'short') {
      description = `Quick ${cleanTopic} gameplay highlights! Top strategies in under 5 minutes.\n\n• Best weapons\n• Quick tips\n\nLike & Subscribe for more gaming content!`;
    } else if (contentLength === 'long') {
      description = `Welcome to my ULTIMATE ${cleanTopic} guide! This is the most comprehensive breakdown you'll find anywhere.\n\n• Complete beginner to advanced strategies for all player levels\n• Every secret location, easter egg, and hidden item in the game\n• Detailed analysis of all character builds and optimal loadouts\n• Full walkthrough of all main and side missions\n• PvP strategies that will put you in the top 1% of players\n• Economy tips to maximize your in-game currency\n\nComment below what game you want to see next!\n\nJoin my Discord: [Discord Link]\n\nTimestamps:\n00:00 - Introduction\n02:15 - Basics for Beginners\n08:40 - Advanced Techniques\n15:33 - Secret Locations\n22:47 - Best Loadouts\n31:18 - Boss Strategies\n42:55 - PvP Tips\n50:22 - Conclusion`;
    } else {
      description = `Welcome to my ${cleanTopic} video! In this gameplay, you'll discover:\n\n• Pro strategies for beginners and advanced players\n• Secret locations and easter eggs\n• Best loadouts and equipment\n\nComment below what game you want to see next!\n\nJoin my Discord: [Discord Link]`;
    }
    
    // Alternative titles
    titleAlternatives = [
      `Becoming a ${cleanTopic} Pro in 10 Minutes`,
      `The ${cleanTopic} Secrets Only Top Players Know`,
      `How I Dominated ${cleanTopic} With These Simple Tricks`
    ];
    
    // Keyword suggestions
    keywordSuggestions = [
      `${cleanTopic} pro tips`,
      `how to win ${cleanTopic}`,
      `${cleanTopic} best loadout`,
      `${cleanTopic} secrets`,
      `${cleanTopic} walkthrough`
    ];
    
    // Content trends
    contentTrends = [
      { trend: "Boss Fight Tutorials", relevance: 0.88 },
      { trend: "Hidden Easter Eggs", relevance: 0.76 },
      { trend: "Speed Running", relevance: 0.65 }
    ];
    
    // Sentiment score (excited/positive)
    sentimentScore = 0.85;
  } else {
    // Default/generic response for other categories
    title = `The Ultimate Guide to ${cleanTopic} | What You NEED to Know`;
    hashtags = `#${cleanTopic.replace(/\s+/g, '')} #Tutorial #HowTo #Guide`;
    tags = `${cleanTopic}, guide, tutorial, how-to, tips, advice, beginner's guide`;
    
    // Enhanced generation with length options
    if (contentLength === 'short') {
      description = `Quick guide to ${cleanTopic}! Essential tips in under 5 minutes.\n\nHIGHLIGHTS:\n- Main points\n- Quick tips\n\nLike & Subscribe!`;
    } else if (contentLength === 'long') {
      description = `This is the DEFINITIVE guide to ${cleanTopic} that will take you from complete beginner to expert level.\n\nCOMPREHENSIVE BREAKDOWN:\n- Complete history and evolution of ${cleanTopic}\n- Fundamental principles and concepts explained in detail\n- Advanced techniques with practical demonstrations\n- Expert-level strategies and methodologies\n- Common pitfalls and how to avoid them\n- Future trends and developments in ${cleanTopic}\n- Resources for continued learning and practice\n\nIf you found this helpful, please like and subscribe for more in-depth content like this!\n\nFollow me on social media:\nInstagram: [Your Instagram]\nTwitter: [Your Twitter]\n\nTimestamps:\n00:00 - Introduction\n03:12 - Fundamentals\n09:45 - Beginner Techniques\n18:30 - Intermediate Concepts\n27:15 - Advanced Strategies\n36:40 - Expert Tips\n45:22 - Resources\n49:15 - Conclusion`;
    } else {
      description = `In this video on ${cleanTopic}, I'm covering everything you need to know.\n\nHIGHLIGHTS:\n- Complete breakdown of ${cleanTopic}\n- Expert tips and techniques\n- Common mistakes to avoid\n\nIf you found this helpful, please like and subscribe for more content like this!\n\nFollow me on social media:\nInstagram: [Your Instagram]\nTwitter: [Your Twitter]`;
    }
    
    // Alternative titles
    titleAlternatives = [
      `Learn ${cleanTopic} in 10 Minutes - Beginner's Guide`,
      `${cleanTopic} Masterclass: From Basic to Advanced`,
      `${cleanTopic} Explained: Simple Tips for Amazing Results`
    ];
    
    // Keyword suggestions
    keywordSuggestions = [
      `${cleanTopic} tutorial`,
      `how to ${cleanTopic}`,
      `${cleanTopic} for beginners`,
      `${cleanTopic} tips`,
      `learn ${cleanTopic}`
    ];
    
    // Content trends
    contentTrends = [
      { trend: "Step-by-Step Tutorials", relevance: 0.82 },
      { trend: "Before and After Results", relevance: 0.74 },
      { trend: "Beginner Friendly", relevance: 0.91 }
    ];
    
    // Sentiment score (helpful/informative)
    sentimentScore = 0.68;
  }
  
  // Return the generated content
  return {
    title,
    hashtags,
    tags,
    description,
    titleAlternatives,
    keywordSuggestions,
    sentimentScore,
    contentTrends
  };
};

// Function to analyze content sentiment (mock)
export const analyzeSentiment = (content: string): number => {
  // In a real implementation, this would call a sentiment analysis API
  // For now, return a random sentiment score between 0 and 1
  return Math.random();
};

// Function to get trending keywords for a topic (mock)
export const getTrendingKeywords = (topic: string, category: string): string[] => {
  // In a real implementation, this would fetch trending keywords from YouTube API
  // For now, return some generic trending keywords
  const trendingKeywords = [
    `trending ${topic}`,
    `${topic} 2025`,
    `best ${topic}`,
    `new ${topic}`,
    `${topic} explained`
  ];
  
  return trendingKeywords;
};
