
import { CATEGORIES } from '../components/CategorySelector';
import { TONES } from '../components/ToneSelector';

export interface VideoContentResult {
  title: string;
  hashtags: string;
  tags: string;
  description: string;
}

// This is a mock function that simulates AI content generation
// In a real app, this would call an AI API like GPT-4
export const generateVideoContent = async (
  topic: string,
  categoryId: string,
  toneId: string
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
  
  if (categoryId === 'tech') {
    title = toneId === 'professional' 
      ? `${cleanTopic} - Complete Overview and Analysis 2025`
      : `I Can't Believe What This ${cleanTopic} Can Do! 🤯 *MIND BLOWN*`;
      
    hashtags = `#${cleanTopic.replace(/\s+/g, '')} #TechReview #LatestTech #TechTutorial`;
    tags = `${cleanTopic}, review, technology, gadget, tech review, tutorial, how-to, new tech 2025`;
    description = `In this comprehensive video about ${cleanTopic}, I'm breaking down everything you need to know.\n\n✅ Full specs and features\n✅ Performance tests and benchmarks\n✅ Comparison with competitors\n✅ Is it worth your money?\n\nCheck out my other tech reviews: [Your Channel Link]`;
  } else if (categoryId === 'gaming') {
    title = toneId === 'funny' 
      ? `I Tried ${cleanTopic} So You Don't Have To 😂 *HILARIOUS FAILS*`
      : `${cleanTopic} Gameplay - Advanced Tips & Strategies`;
      
    hashtags = `#${cleanTopic.replace(/\s+/g, '')} #GamerLife #Gaming #GameplayTips`;
    tags = `${cleanTopic}, gameplay, gaming, walkthrough, tips and tricks, strategy, game review`;
    description = `Welcome to my ${cleanTopic} video! In this gameplay, you'll discover:\n\n• Pro strategies for beginners and advanced players\n• Secret locations and easter eggs\n• Best loadouts and equipment\n\nComment below what game you want to see next!\n\nJoin my Discord: [Discord Link]`;
  } else {
    // Default/generic response for other categories
    title = `The Ultimate Guide to ${cleanTopic} | What You NEED to Know`;
    hashtags = `#${cleanTopic.replace(/\s+/g, '')} #Tutorial #HowTo #Guide`;
    tags = `${cleanTopic}, guide, tutorial, how-to, tips, advice, beginner's guide`;
    description = `In this video on ${cleanTopic}, I'm covering everything you need to know.\n\nHIGHLIGHTS:\n- Complete breakdown of ${cleanTopic}\n- Expert tips and techniques\n- Common mistakes to avoid\n\nIf you found this helpful, please like and subscribe for more content like this!\n\nFollow me on social media:\nInstagram: [Your Instagram]\nTwitter: [Your Twitter]`;
  }
  
  // Return the generated content
  return {
    title,
    hashtags,
    tags,
    description
  };
};
