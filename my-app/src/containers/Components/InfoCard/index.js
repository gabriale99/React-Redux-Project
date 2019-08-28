import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  ReactMarkdown
} from "../../../components/index";
import MainContent from "../../MainContent";
import CodeBlock from "../../CodeBlock";

function InfoCard() {
  const codeSample = `
    import React from 'react';
    import { Button, Card, CardActionArea, CardActions,
      CardContent, CardMedia, Typography, } from '@material-ui/core'

    function renderInfoCard() {
      return (
        <Card>
          <CardActionArea>
            <CardMedia
              image="Your image url"
              title="Your title"
            />
            <CardContent>
              <Typography>
                Your card content
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button>Your button content</Button>
            <Button>Your button content</Button>
          </CardActions>
        </Card>
      );
    }
    `;

  let code = (
    <ReactMarkdown
      source={codeSample}
      renderers={{ code: CodeBlock }}
      className="sample-code"
    />
  );

  function renderInfoCard() {
    return (
      <div className="component-container">
          <Card className="card">
            <CardActionArea>
              <CardMedia
                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
                className="card-media"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
      </div>
    );
  }

  return (
    <MainContent
      label="Info Card section"
      content={renderInfoCard()}
      code={code}
    />
  );
}

export default InfoCard;
