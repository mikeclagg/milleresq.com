export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  imageUrl?: string;
}
