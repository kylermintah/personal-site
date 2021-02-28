import * as React from "react";
import { ArticleCard } from './ArticleCard';
import { Container, Row } from 'react-bootstrap';
import './styles/Garden.scss';

import articles from './articles'

export function Garden(props) {
    return (
     
          <main >
            <table>
          {articles.map(article => (
            <ArticleCard className ="mr" key={`${article.id}`}>
              <ArticleCard.Image src={article.image} alt = {article.Button}/>
              <ArticleCard.Body>
                <ArticleCard.Title>{article.title}</ArticleCard.Title>
                <ArticleCard.Text>{article.text}</ArticleCard.Text>
                <ArticleCard.Button>{article.ctaText}</ArticleCard.Button>
              </ArticleCard.Body>
            </ArticleCard>
          ))}
          </table>
        </main>        
   

    
    )
}

export default Garden;