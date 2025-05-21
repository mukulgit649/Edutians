// API configuration
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_AI_API_KEY;

// Types
interface LearningProgress {
  userId: string;
  topicId: string;
  proficiency: number;
  lastReviewed: Date;
}

interface PracticeQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: number;
}

interface VideoAnalysis {
  videoId: string;
  transcript: string;
  keyMoments: Array<{
    timestamp: number;
    description: string;
  }>;
  summary: string;
}

interface LearningPath {
  userId: string;
  subject: string;
  modules: Array<{
    id: string;
    title: string;
    description: string;
    estimatedTime: number;
    prerequisites: string[];
  }>;
  estimatedCompletionTime: number;
}

interface WellnessData {
  focusScore: number;
  energyLevel: number;
  productivityScore: number;
  workLifeBalance: number;
  recommendations: string[];
}

interface Recommendation {
  id: string;
  title: string;
  description: string;
  type: string;
  priority: number;
}

// AI Service class
class AIService {
  private static instance: AIService;
  private headers: { [key: string]: string };

  private constructor() {
    this.headers = {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    };
  }

  public static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  // Personalized Learning
  async generateLearningPath(userId: string, subject: string): Promise<LearningPath> {
    try {
      const response = await fetch(`${API_BASE_URL}/learning/path`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({ userId, subject })
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    } catch (error) {
      console.error('Error generating learning path:', error);
      throw error;
    }
  }

  // Smart Practice Questions
  async generatePracticeQuestions(
    topic: string,
    difficulty: number,
    count: number
  ): Promise<PracticeQuestion[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/questions/generate`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({ topic, difficulty, count })
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    } catch (error) {
      console.error('Error generating practice questions:', error);
      throw error;
    }
  }

  // Video Content Analysis
  async analyzeVideoContent(videoUrl: string): Promise<VideoAnalysis> {
    try {
      const response = await fetch(`${API_BASE_URL}/video/analyze`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({ videoUrl })
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    } catch (error) {
      console.error('Error analyzing video content:', error);
      throw error;
    }
  }

  // Spaced Repetition
  async getNextReviewTime(progress: LearningProgress): Promise<Date> {
    try {
      const response = await fetch(`${API_BASE_URL}/spaced-repetition/next-review`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(progress)
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return new Date(data.nextReviewTime);
    } catch (error) {
      console.error('Error calculating next review time:', error);
      throw error;
    }
  }

  // Wellness Component
  async analyzeLearningPatterns(userId: string): Promise<WellnessData> {
    try {
      const response = await fetch(`${API_BASE_URL}/wellness/learning-patterns/${userId}`, {
        method: 'GET',
        headers: this.headers
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    } catch (error) {
      console.error('Error analyzing learning patterns:', error);
      throw error;
    }
  }

  // Get personalized recommendations
  async getRecommendations(userId: string): Promise<Recommendation[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/recommendations/${userId}`, {
        method: 'GET',
        headers: this.headers
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    } catch (error) {
      console.error('Error getting recommendations:', error);
      throw error;
    }
  }
}

export default AIService; 