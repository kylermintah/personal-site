import * as React from "react";
// import { ArticleCard } from './ArticleCard';
// import styles from './styles/Garden.module.scss';
import Blog from "../Medium/Blog";

// import articles from '../../articles/articles.json'

export function Garden(props) {
  return (
    <main>
      <div>
        <Blog />
      </div>

      {/* {articles.map(article => (
            <ArticleCard className ={styles.mr} key={`${article.id}`}>
              <ArticleCard.Image src={article.image} alt = {article.Button}/>
              <ArticleCard.Body>
                <ArticleCard.Title>{article.title}</ArticleCard.Title>
                <ArticleCard.Text>{article.text}</ArticleCard.Text>
                <ArticleCard.Button link={article.link}>{article.ctaText}</ArticleCard.Button>
              </ArticleCard.Body>
            </ArticleCard>
          ))} */}
    </main>
  );
}

export default Garden;
