export interface CourseProgram {
  id: string;
  category: 'school' | 'intermediate';
  code: string;
  title: string;
  subtitle: string;
  description: string;
  subjects: string[];
  targetExams: string[];
  batchTimings: string;
  modes: ('Offline' | 'Online')[];
  features: string[];
  highlight: string;
}

export interface Hallmark {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  bullets: string[];
}

export interface StudentResult {
  id: string;
  name: string;
  course: string;
  achievement: string;
  score: string;
  schoolCollege: string;
  year: string;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
