import { Avatar, Banner } from "../auth/types";

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
  banner: Banner;
  avatar: Avatar;
  _count: {
    posts: number;
    followers: number;
    following: number;
  };
}
