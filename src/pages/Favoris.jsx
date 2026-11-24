import { useOutletContext } from "react-router";
import ListeArticles from "../components/ListeArticles.jsx";

export default function Favoris() {
  const { favoris, basculerFavori } = useOutletContext();
  return (
    <>
      <h1>Mes favoris</h1>
      {favoris.length === 0 ? (
        <p className="etat">Aucun favori pour le moment.</p>
      ) : (
        <ListeArticles articles={favoris} favoris={favoris} onBasculerFavori={basculerFavori} />
      )}
    </>
  );
}

