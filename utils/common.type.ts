export type NextAuthCredentialsReturn = {
  email: string | undefined;
};
export type NextAuthCredentials = {};
export type NextAuthCredentialsReq = {};

export type DBDataType = {
  _id: string;
  name: string;
  translation: string;
  source?: string;
  description?: string;
  video?: string;
  picture?: string;
};
