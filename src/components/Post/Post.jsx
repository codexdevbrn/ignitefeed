import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'
import styles from "./Post.module.css";

export function Post({author, publishedAt, content}) {

  const publishedAtFormatter = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
    locale: ptBr,
  })

  const publishedDateRelativeToNow =  formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

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

        <time title={publishedAtFormatter} dateTime={publishedAt.toISOString()}>{
          publishedDateRelativeToNow
          }</time>
      </header>

      <div className={styles.content}>
          {content.map(line => {
            if(line.type === 'paragraph') {
              return <p key={line.type}>{line.content}</p>;
            } else if(line.type === 'link'){
              return <a key={line.type} href="#">{line.content}</a>
            }
          })}
      </div>

      <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>
      <textarea placeholder="Deixe um comentário"></textarea>

      <footer>
      <button type="submit">Publicar</button>
      </footer>
      </form>
      
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
