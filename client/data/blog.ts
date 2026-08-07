export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
  content?: string;
  sections?: Array<{
    heading: string;
    content?: string;
    points?: string[];
  }>;
};

export const blogPosts: BlogPost[] = [
];
