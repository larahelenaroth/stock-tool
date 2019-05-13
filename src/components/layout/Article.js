import React from 'react';

const Article = props => {
  const { article } = props;
  const truncate = summary => {
    if (summary.length > 500) {
      return summary.substr(0, 500) + '...';
    } else {
      return summary;
    }
  };

  return (
    <React.Fragment>
      <div className="card-header">
        <h4>
          <a href={article.url}>{article.headline}</a>
        </h4>
        <img
          src={article.image}
          alt=""
          style={{ maxWidth: '100%', maxHeight: '200px' }}
        />
        <p>{Date(article.datetime)}</p>
      </div>
      <div className="card card-body mb-3">
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {truncate(article.summary)}
        </span>
      </div>
    </React.Fragment>
  );
};
export default Article;
