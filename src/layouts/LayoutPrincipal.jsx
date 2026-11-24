import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";

export default function LayoutPrincipal() {
  const [favoris, setFavoris] = useState([]);

  function basculerFavori(article) {
    setFavoris((actuels) =>
      actuels.some((f) => f.id === article.id)
        ? actuels.filter((f) => f.id !== article.id)
        : [...actuels, article]
    );
  }

  return (
    <>
      <header className="navbar">
        <Link to="/">
          <img src="/logo-teranga-blog.png" alt="Teranga Blog" className="logo" />
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/articles">Articles</NavLink>
          <NavLink to="/auteurs">Auteurs</NavLink>
          <NavLink to="/favoris">Favoris ({favoris.length})</NavLink>
        </nav>
      </header>
      <main className="page">
        <Outlet context={{ favoris, basculerFavori }} />
      </main>
    </>
  );
}

