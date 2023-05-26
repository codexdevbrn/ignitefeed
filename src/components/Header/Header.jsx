import styles from './Header.module.css'
import igniteSimbol from '../../assets/ignitesimbol.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteSimbol} alt='Ignite Logo' />
            <strong>Ignite Feed</strong>
        </header>
    );
}