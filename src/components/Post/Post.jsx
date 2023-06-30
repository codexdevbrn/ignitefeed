import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({author, publishedAt, content}) {

  const [comments, setComments] = useState([]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedAtFormatter = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
    locale: ptBr,
  });
  const publishedDateRelativeToNow =  formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  });

  const isNewCommentEmpty = newCommentText.length === 0;

  function handleNewCommentText(){
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value)
  }

  function handleSubmitComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
 
    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid() {
     event.target.setCustomValidity("Esse campo é obrigatório");
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormatter} dateTime={publishedAt.toISOString()}>
          { publishedDateRelativeToNow}
          </time>
      </header>

      <div className={styles.content}>
          {content.map(line => {
            if(line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>;
            } else if(line.type === 'link'){
              return <p key={line.content}><a href="#">{line.content}</a></p>;
            }
          })}
      </div>

      <form 
      onSubmit={handleSubmitComment}
      className={styles.commentForm}>

      <strong>Deixe seu feedback</strong>
      <textarea
      name='comment'
      value={newCommentText}
      placeholder="Deixe um comentário" 
      onChange={handleNewCommentText}
      onInvalid={handleNewCommentInvalid}
      required
      >
      </textarea>

      <footer>
      <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
      </footer>
      </form>
      
      <div className={styles.commentList}>
       {comments.map(comment => {
        return <Comment 
        key={comment} 
        content={comment} 
        onDeleteComment={deleteComment} />
})}
      </div>
    </article>
  );
}
