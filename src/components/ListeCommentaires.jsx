
export default function ListeCommentaires({ commentaires }) {
  return (
    <div className="liste-commentaires">
      {commentaires.map((commentaire) => (
        <div key={commentaire.id} className="commentaire">
          <h4>{commentaire.name}</h4>
          <p>{commentaire.body}</p>
        </div>
      ))}
    </div>
  );
}


