export interface IData {
  login: string;
  id?: number;
  avatar_url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  blog: string;
  location: string | null;
  email: string | null;
  bio: string | null;
  following: number;
  followers: number;
}
