import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://www.github.com/codexdevbrn.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Duarte</strong>
                            <time dateTime='2023-05-19 14:03:53'>Cerca de 2h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                        <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                        Muito bom Bruno, parabéns!!! 
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