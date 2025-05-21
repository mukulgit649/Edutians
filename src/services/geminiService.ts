// Gemini API configuration
const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

class GeminiService {
  private static instance: GeminiService;
  private headers: { [key: string]: string };

  private constructor() {
    this.headers = {
      'Content-Type': 'application/json',
      'x-goog-api-key': GEMINI_API_KEY || '',
    };
  }

  public static getInstance(): GeminiService {
    if (!GeminiService.instance) {
      GeminiService.instance = new GeminiService();
    }
    return GeminiService.instance;
  }

  async generateContent(prompt: string): Promise<string> {
    try {
      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate content');
      }

      const data: GeminiResponse = await response.json();
      return data.candidates[0]?.content.parts[0]?.text || '';
    } catch (error) {
      console.error('Error generating content:', error);
      throw error;
    }
  }

  // Smart Note Taking
  async generateNoteSummary(text: string): Promise<string> {
    const prompt = `Please summarize the following text in a concise and organized way, highlighting key points and concepts:\n\n${text}`;
    return this.generateContent(prompt);
  }

  // Lecture Summarizer
  async summarizeLecture(transcript: string): Promise<string> {
    const prompt = `Please analyze this lecture transcript and provide:\n1. A concise summary\n2. Key points\n3. Important concepts\n4. Follow-up questions\n\nTranscript:\n${transcript}`;
    return this.generateContent(prompt);
  }

  // Video Content Analysis
  async analyzeVideoTranscript(transcript: string): Promise<string> {
    const prompt = `Please analyze this video transcript and provide:\n1. Key moments and timestamps\n2. Main topics discussed\n3. Important concepts\n4. Study guide format\n\nTranscript:\n${transcript}`;
    return this.generateContent(prompt);
  }

  // Smart Practice Questions
  async generateQuestions(topic: string, difficulty: string): Promise<string> {
    const prompt = `Please generate ${difficulty} difficulty practice questions about ${topic}. Include:\n1. Multiple choice questions\n2. Short answer questions\n3. Explanations for answers\n4. Key concepts to focus on`;
    return this.generateContent(prompt);
  }

  // Learning Path Generation
  async generateLearningPath(subject: string, level: string): Promise<string> {
    const prompt = `Please create a personalized learning path for ${subject} at ${level} level. Include:\n1. Recommended topics\n2. Learning sequence\n3. Estimated time for each topic\n4. Prerequisites\n5. Practice exercises`;
    return this.generateContent(prompt);
  }

  // Spaced Repetition Schedule
  async generateReviewSchedule(topic: string, proficiency: number): Promise<string> {
    const prompt = `Based on a proficiency level of ${proficiency}/10 for ${topic}, please suggest:\n1. Review schedule\n2. Key concepts to focus on\n3. Practice exercises\n4. Next review timing`;
    return this.generateContent(prompt);
  }
}

export default GeminiService; 