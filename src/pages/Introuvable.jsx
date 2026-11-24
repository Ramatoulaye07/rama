import { Link } from "react-router";

export default function Introuvable() {
  return (
    <>
      <h1>404 : page introuvable</h1>
      <p><Link to="/">Retour à l'accueil</Link></p>
    </>
  );
}
