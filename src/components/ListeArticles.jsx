import ArticleCard from "./ArticleCard.jsx";

export default function ListeArticles({ articles, favoris, onBasculerFavori }) {
  if (articles.length === 0) return <p>Aucun article trouvé.</p>;
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          estFavori={favoris.includes(article.id)}
          onBasculerFavori={onBasculerFavori}
        />
      ))}
    </div>
  );
}