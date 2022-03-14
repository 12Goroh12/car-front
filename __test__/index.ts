import { NextRouter } from "next/router";

export const providers = {
  google: {
    callbackUrl: "http://localhost:3000/api/auth/callback/google",
    id: "google",
    name: "Google",
    signinUrl: "http://localhost:3000/api/auth/signin/google",
    type: "oauth",
  },
  github: {
    callbackUrl: "http://localhost:3000/api/auth/callback/github",
    id: "github",
    name: "GitHub",
    signinUrl: "http://localhost:3000/api/auth/signin/github",
    type: "oauth",
  },
  facebook: {
    callbackUrl: "http://localhost:3000/api/auth/callback/facebook",
    id: "facebook",
    name: "Facebook",
    signinUrl: "http://localhost:3000/api/auth/signin/facebook",
    type: "oauth",
  },
};

export const provider = {
  callbackUrl: "http://localhost:3000/api/auth/callback/google",
  id: "google",
  name: "Google",
  signinUrl: "http://localhost:3000/api/auth/signin/google",
  type: "oauth",
};

export const createMockRouter = (router: Partial<NextRouter>): NextRouter => {
  return {
    basePath: "",
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: "en",
    domainLocales: [],
    isPreview: false,
    ...router,
  };
};
