
export default function BarreRecherche({ valeur, onChangement }) {
  return (
    <div className="barre-recherche">
      <input
        type="text"
        placeholder="Rechercher un article..."
        value={valeur}
        onChange={onChangement}
      />
    </div>
  );
}

