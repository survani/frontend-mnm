import List from "../components/cards/myth-list/List";

export type myth = {
  id: number;
  title: string;
  slug: string;
  description: string;
  topic: string;
  imageUrl: string;
  likes: number;
  shockedFactor: number;
  publishedDate: string;
  content: string;
  featured: boolean;
};

export type ListProps = {
  title: string;
  subText: string;
};
