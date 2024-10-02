
    import { Trash, ThumbsUp } from 'phosphor-react';
    import styles from './Comment.module.css';
    import { Avatar } from '../Avatar/index';
    import { useState } from 'react';

    interface CommentProps {
        content: string;
        onClick: () => void;
    }
    

    export function Comment({content, onClick}: CommentProps){
        const [likesCount, setLikesCount] = useState(0);

        function likeCounter(){
            setLikesCount((prevState) => prevState + 1);
        }
        return(
            <div className={styles.comment}>

                <Avatar src="https://github.com/davicotting.png" isProfilePictureWithBorder  />

                <div className={styles.commentBoxContainer}>

                <div className={styles.commentBox}>
                    <header>
                        <div className={styles.commentData}>
                            
                                <div className={styles.user}>
                                <strong>Davi Cotting</strong>
                                <span>(voce)</span>
                                </div>

                                <time  title='Postado há cerca de 2 horas atrás'>Cerca de 2h</time>
                        </div>


                        <Trash 
                        size={20} 
                        className={styles.trash} 
                        onClick={onClick}/>

                    </header>

                    <p>
                       {content} 
                    </p>
                    
                </div>
                    <button onClick={likeCounter}>
                    <ThumbsUp size={14} />
                    <span>Aplaudir</span>
                    <span>•</span>
                    <span>{likesCount}</span>
                    </button>
                </div>
            </div>
        )
    }