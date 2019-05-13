import React from 'react';
import Article from '../layout/Article';

const News = props => {
  const { articles } = props;
  console.log(articles);
  return (
    <React.Fragment>
      {articles.map(article => (
        <Article key={article.url} article={article} />
      ))}
    </React.Fragment>
  );
};
export default News;
