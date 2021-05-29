import React from "react";
import classNames from "classnames";
import {
  Container,
  Body,
  Title,
  Text,
  Image,
  Button,
} from "./styles/ArticleCards";

export function ArticleCard({ classes, children, ...restProps }) {
  return (
    <Container className={classNames("card", classes)} {...restProps}>
      {children}
    </Container>
  );
}

ArticleCard.Body = function ArticleCardBody({
  classes,
  children,
  ...restProps
}) {
  return (
    <Body className={classNames("card__body", classes)} {...restProps}>
      {children}
    </Body>
  );
};

ArticleCard.Title = function ArticleCardTitle({
  classes,
  children,
  ...restProps
}) {
  return (
    <Title className={classNames("card__title", classes)} {...restProps}>
      {children}
    </Title>
  );
};

ArticleCard.Text = function ArticleCardImage({
  classes,
  children,
  ...restProps
}) {
  return (
    <Text className={classNames("card__text", classes)} {...restProps}>
      {children}
    </Text>
  );
};

ArticleCard.Image = function ArticleCardImage({
  src,
  alt,
  classes,
  ...restProps
}) {
  return (
    <Image
      src={src}
      alt={alt}
      className={classNames("card__image", classes)}
      {...restProps}
    ></Image>
  );
};

ArticleCard.Button = function ArticleCardButton({
  classes,
  children,
  link,
  ...restProps
}) {
  return (
    <a href={link} style={{ textDecorationLine: "none" }}>
      <Button
        type="button"
        className={classNames("card__button", classes)}
        {...restProps}
      >
        {children}
      </Button>
    </a>
  );
};

export default ArticleCard;
