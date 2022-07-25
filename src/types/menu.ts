export type Menu = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  category: [string];
  genre: [string];
  taste?: [string];
  flavor?: [string];
  message?: string;
  img?: {
    url: string;
  };
  description?: string;
};
