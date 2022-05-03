import React from 'react';
import PropTypes from 'prop-types';
import './article.scss';

function Article({
  title,
  price,
  description,

}) {
  return (
    <article className="article">
      <div className="article-item">
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
      <p className="article-item-description">
        {description}
      </p>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string,
};
Article.defaultProps = {
  description: null,
};
export default React.memo(Article);
