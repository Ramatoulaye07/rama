import { useEffect, useState } from "react";
import { API_URL } from "../constants.js";
import EtatRequete from "../components/EtatRequete.jsx";
import ListeArticles from "../components/ListeArticles.jsx";
import BarreRecherche from "../components/BarreRecherche.jsx";
import { useOutletContext } from "react-router";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [recherche, setRecherche] = useState("");


  useEffect(() => {
    const controller = new AbortController();
    fetch(`${API_URL}/posts?_limit=12`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Reponse ${response.status}`);
        return response.json();
      })
      .then((donnees) => {
        setArticles(donnees);
        setChargement(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setErreur(error.message);
          setChargement(false);
        }
      });
    return () => controller.abort();
  }, []);
  const { favoris, basculerFavori } = useOutletContext();
  const articlesFiltres = articles.filter((article) =>
    article.title.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <>
      <h1>Articles</h1>
      <p>{favoris.length} articles favoris</p>
      <BarreRecherche valeur={recherche} onChangement={(e) => setRecherche(e.target.value)} />
      <EtatRequete chargement={chargement} erreur={erreur}>
        <ListeArticles articles={articlesFiltres} favoris={favoris} onBasculerFavori={basculerFavori} />
      </EtatRequete>
    </>
  );
}

