export type AllNewsResponse = {
  message: string;
  data: {
    news: News[];
  };
};

type News = {
  title: string;
  image_url: string;
  source: string;
  created_at: string;
  excerpt: string;
  permalink: string;
  id: number;
  published_at: string;
  updated_at: string;
};
