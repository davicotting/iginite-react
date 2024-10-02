    
    import styles from './Header.module.css';
    import igniteLogo from '../../assets/IgniteLogo.svg'

    export function Header(){
        return(
            <header className={styles.header}>
                <img src={igniteLogo} alt="Logo do ignite" />
                <h1>Ignite Feed</h1>
            </header>
        )
    }