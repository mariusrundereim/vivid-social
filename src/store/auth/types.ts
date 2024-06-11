export interface Avatar {
  url: string;
  alt: string;
}

export interface Banner {
  url: string;
  alt: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  bio?: string;
  avatar?: Avatar;
  banner?: Banner;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  data: {
    name: string;
    email: string;
    avatar: Avatar;
    banner: Banner;
    accessToken: string;
  };
  meta: {};
}
