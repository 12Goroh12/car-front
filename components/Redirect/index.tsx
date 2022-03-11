import { NextRouter, useRouter } from "next/router";
import { FC, useEffect } from "react";

interface IRedirectProps {
  to: string;
}

const Redirect: FC<IRedirectProps> = ({ to }) => {
  const router: NextRouter = useRouter();

  useEffect(() => {
    router.push(to);
  }, [router, to]);

  return null;
};

export default Redirect;
