import styles from './Header.module.css';
import rocket from '../assets/rocket.svg';

export function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.boxtodo}>
                <img src={rocket} alt="logotipo rocket" />
                <div>to<span>do</span></div>
            </div>
        </header>
    )
}