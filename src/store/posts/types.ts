export interface Image {
  url: string;
  alt: string;
}

export interface Count {
  likes: number;
  comments: number;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  image: Image;
  created: string;
  updated: string;
  _count: Count;
}

export interface Comment {
  id: number;
  postId: number;
  text: string;
  created: string;
}
