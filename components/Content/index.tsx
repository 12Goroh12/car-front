import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { WebsiteUrls } from "../../types/enums";
import { Button, ButtonGroup, Container, ItemText } from "./style";

interface IContentProps {
  image: string;
  title: string;
  description?: string;
}

const Content: FC<IContentProps> = ({ image, title, description }) => {
  const [hasMounted, setHasMounted] = useState(false);
  let user;
  let userSocial;

  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("user") || "null");
    userSocial = JSON.parse(localStorage.getItem("social") || "null");
  }

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <Container imgUrl={image}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <ButtonGroup>
        {user || userSocial ? (
          <Link href={WebsiteUrls.NEW_ADN_USED} passHref>
            <Button>Store</Button>
          </Link>
        ) : (
          <Link href={WebsiteUrls.LOGIN} passHref>
            <Button>Sign in</Button>
          </Link>
        )}
      </ButtonGroup>
    </Container>
  );
};

export default Content;
