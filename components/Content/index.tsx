import Link from "next/link";
import { FC } from "react";
import { WebsiteUrls } from "../../types/enums";
import { Button, ButtonGroup, Container, ItemText } from "./style";

interface IContentProps {
  image: string;
  title: string;
  description?: string;
}

const Content: FC<IContentProps> = ({ image, title, description }) => {
  return (
    <Container imgUrl={image}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <ButtonGroup>
        <Link href={WebsiteUrls.NEW_ADN_USED} passHref>
          <Button>Store</Button>
        </Link>
        <Link href={WebsiteUrls.TEST_DRIVE} passHref>
          <Button>Test Drive</Button>
        </Link>
      </ButtonGroup>
    </Container>
  );
};

export default Content;
