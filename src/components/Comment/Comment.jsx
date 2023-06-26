import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from '../Avatar/Avatar';

export function Comment({content, onDeleteComment}) {

    function handleRemoveComment() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://www.github.com/codexdevbrn.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Duarte</strong>
                            <time dateTime='2023-05-19 14:03:53'>Cerca de 2h atrás</time>
                        </div>
                        <button onClick={handleRemoveComment} title='Deletar comentário'>
                        <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    );
}