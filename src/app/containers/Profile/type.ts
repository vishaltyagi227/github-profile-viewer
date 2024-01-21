export interface IProfile {
  userDetails: {
    userName?: string;
    avatarUrl?: string;
    url?: string;
    location?: string | null;
    email?: string | null;
    bio?: string | null;
    blog?: string;
    following?: number;
    followers?: number;
  };
}
