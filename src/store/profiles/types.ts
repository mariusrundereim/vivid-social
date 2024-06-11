export interface Image {
  url: string;
  alt: string;
}

export interface Count {
  followers: number;
  following: number;
}

export interface Profile {
  name: string;
  email: string;
  bio: string;
  banner: Image;
  avatar: Image;
  _count: Count;
}
