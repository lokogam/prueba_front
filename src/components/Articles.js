import React, { useState } from "react";

function Articles({ dataArticle }) {
  console.log(dataArticle);
  const [articles, setArticles] = useState(dataArticle);
  const [votes, setVotes] = useState(false);
  const [specials, setSpecials] = useState(false);

  const handleSortedArticles1 = () => {
    if (!votes) {
      const sortedArticles = [...articles].sort(
        (a, b) => b.upvotes - a.upvotes
      );
      setArticles(sortedArticles);
      setVotes(true);
      setSpecials(false);
    }
  };

  const handleSortedArticles2 = () => {
    if (!specials) {
      const sortedArticles = articles.sort((a, b) => {
        if (b.specials && !a.specials) {
          return 1;
        } else if (!b.specials && a.specials) {
          return -1;
        } else {
          return b.upvotes - a.upvotes;
        }
      });
      setArticles(sortedArticles);
      setSpecials(true);
      setVotes(false);
    }
  };

  return (
    <div>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Ordenar por
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={handleSortedArticles1}
        >
          Más votados
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={handleSortedArticles2}
        >
          Con descuento
        </button>
      </div>

      <div className="card w-50 mx-auto">
        <table>
          <thead>
            <tr>
              <th> Articulo </th>
              <th> votos a favor</th>
              <th> fecha </th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, i) => (
              <tr data-testid="article" key={i}>
                <td data-testid="article-title">{article.title}</td>
                <td data-testid="article-upvotes">{article.upvotes}</td>
                <td data-testid="article-date">{article.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Articles;
