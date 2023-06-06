export type TopStories = number[];

export interface Article {
  by: string;
  descendants?: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  text?: string;
  parent?: number;
  title: string;
  type: string;
  url: string;
}
