import React from "react";
import { Card, Button } from "react-bootstrap";

const News = (props) => {
    const {title, author, description, urlToImage} = props.article;
  return (
    <Card>
      
      <Card.Body>
      <Card.Img style={{ height: '60vh' }} variant="top" src={urlToImage} fluid/>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default News;
