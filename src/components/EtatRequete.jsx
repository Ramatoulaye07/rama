export default function EtatRequete({ chargement, erreur, children }) {
  if (chargement)
    return <p className="discret">Chargement...</p>;
  if (erreur)
    return <p className="erreur">Erreur : {erreur}</p>;
  return children;


}

