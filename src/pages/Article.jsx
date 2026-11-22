import { useEffect, useState } from "react";
import { API_URL } from "../constants.js";
import EtatRequete from "../components/EtatRequete.jsx";
import ListeCommentaires from "../components/ListeCommentaires.jsx";
import CommentaireForm from "../components/CommentaireForm.jsx";

export default function Article({ id }) {
  const [article, setArticle] = useState(null);
  const [commentaires, setCommentaires] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const options = { signal: controller.signal };
    setChargement(true);
    setErreur(null);

    Promise.all([
      fetch(`${API_URL}/posts/${id}`, options),
      fetch(`${API_URL}/posts/${id}/comments`, options),
    ])
      .then(([repArticle, repComs]) => {
        if (!repArticle.ok) throw new Error(`Article introuvable (${repArticle.status})`);
        if (!repComs.ok) throw new Error(`Commentaires indisponibles (${repComs.status})`);
        return Promise.all([repArticle.json(), repComs.json()]);
      })
      .then(([donneesArticle, donneesComs]) => {
        setArticle(donneesArticle);
        setCommentaires(donneesComs);
        setChargement(false);
      })
      .catch((e) => {
        if (e.name !== "AbortError") {
          setErreur(e.message);
          setChargement(false);
        }
      });

    return () => controller.abort();
  }, [id]);

  function ajouterCommentaire(c) {
    setCommentaires((actuels) => [...actuels, c]);
  }

  return (
    <EtatRequete chargement={chargement} erreur={erreur}>
      {article && (
        <>
          <h1>{article.title}</h1>
          <p>{article.body}</p>
          <h2>Commentaires ({commentaires.length})</h2>
          <ListeCommentaires commentaires={commentaires} />
          <CommentaireForm onAjouter={ajouterCommentaire} />
        </>
      )}
    </EtatRequete>
  );
}