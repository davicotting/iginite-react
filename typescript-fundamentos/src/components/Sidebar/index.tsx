
    import styles from './Sidebar.module.css';
    import { PencilLine } from 'phosphor-react';

    export function Sidebar(){
        return(
            <aside className={styles.sidebar}>
                <img
                className={styles.cover} 
                src="https://p15-kimg.kwai.net/kimg/EKzM1y8qmgEKAnMzEg1waG90by1vdmVyc2VhGoQBdXBpYy8yMDIzLzA4LzAyLzIyL0JNakF5TXpBNE1ESXlNakk1TWpWZk1UVXdNREF4TkRreU1UazFNamsxWHpFMU1ERXdNell6TWpRd05UVTBPVjh5WHpNPV9vZmZuX0JmZDAwNTI3NzUxN2U0N2M0MjZhNDQwYjNmNmFhZjE0NS53ZWJw.webp" 
                />

                <div className={styles.profile}>
                    <img src="https://github.com/davicotting.png" alt="" />

                    <strong>
                        Davi Cotting
                    </strong>

                    <span>
                        Web Developer
                    </span>
                </div>

                <footer className={styles.footer}>
                    <a href='#'>
                        <PencilLine size={20} />
                        Editar seu Perfil
                    </a>
                </footer>

                


            </aside>
        )
    }