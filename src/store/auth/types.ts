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

// export interface Profile {
//   profile: string;
//   email: string;
//   bio: string;
//   avatar: Avatar;
//   banner: Banner;
//   _count: {
//     posts: number;
//     followers: number;
//     following: number;
//   };
// }

// export interface RootState {
//   auth: {
//     token: string | null;
//   };
// }

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

export interface AuthState {
  token: string | null;
}
