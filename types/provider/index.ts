interface IGithub {
  callbackUrl: string;
  id: string;
  name: string;
  signinUrl: string;
  type: string;
}

interface IGoogle {
  callbackUrl: string;
  id: string;
  name: string;
  signinUrl: string;
  type: string;
}

export interface IProviders {
  github: IGithub;
  google: IGoogle;
}

export type IProvider = IGoogle | IGithub;
