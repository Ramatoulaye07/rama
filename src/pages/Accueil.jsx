import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { API_URL } from "../constants.js";
import EtatRequete from "../components/EtatRequete.jsx";
import ListeArticles from "../components/ListeArticles.jsx";


export default function Accueil() {
  const { favoris, basculerFavori } = useOutletContext();
  const [articles, setArticles] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${API_URL}/posts?_limit=3`, { signal: controller.signal })
      .then((reponse) => {
        if (!reponse.ok) throw new Error(`Réponse ${reponse.status}`);
        return reponse.json();
      })
      .then((donnees) => {
        setArticles(donnees);
        setChargement(false);
      })
      .catch((e) => {
        if (e.name !== "AbortError") {
          setErreur(e.message);
          setChargement(false);
        }
      });
    return () => controller.abort();
  }, []);

  return (
    <>
      <h1>Bienvenue sur Teranga Blog</h1>
      <h2>Derniers articles</h2>
      <EtatRequete chargement={chargement} erreur={erreur}>
        <ListeArticles articles={articles} favoris={favoris} onBasculerFavori={basculerFavori} />
      </EtatRequete>
    </>
  );
}