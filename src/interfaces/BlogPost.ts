import { Author } from "./Author";

export type BlogPost = {
  title: string;
  slug: string;
  heroImage: any;
  description: string;
  body: any;
  author: Author;
  publishDate: Date;
};
