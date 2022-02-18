export interface IUserSocial {
  email: string;
  image: string;
  name: string;
}

export interface ISession {
  expires: string;
  user: IUserSocial;
}
