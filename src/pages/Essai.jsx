import { useState } from "react";
import Article from "./Article.jsx";
import Auteurs from "./Auteurs.jsx";
import Auteur from "./Auteur.jsx";

export default function Essai() {
    const [id, setId] = useState(1);
    return (
        <>
            <button className="btn" onClick={() => setId(id + 1)}>Suivant</button>
            <button className="btn" onClick={() => setId(999)}>Id inexistant</button>
            <hr />
            <Auteurs />
            <hr />
            <Auteur id={id} />
            <hr />
            <Article id={id} />
        </>
    );
}