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

interface IFaceBook {
  callbackUrl: string;
  id: string;
  name: string;
  signinUrl: string;
  type: string;
}

export interface IProviders {
  github: IGithub;
  google: IGoogle;
  facebook: IFaceBook;
}

export type IProvider = IGoogle | IGithub | IFaceBook;
