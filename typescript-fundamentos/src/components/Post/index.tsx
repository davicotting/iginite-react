    import { Comment } from '../Comment';
    import { Avatar } from '../Avatar';
    import { format, formatDistanceToNow, formatISO9075 } from 'date-fns';
    import { ptBR } from 'date-fns/locale'
    import styles from './Post.module.css';
    import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'; 

    interface Author {
        
      name: string;
      avatarURL: string;
      role: string;
    }

    interface Content{
        type: string;
        content: string;
    }

    export interface PostType {
        id: number
        author: Author;
        publishedAt: Date;
        content: Content[];
    }

    interface Post {
        post: PostType;
    }
    
    export function Post({ post }: Post){

        const formatedDate = format(post.publishedAt, "'Postado no dia' d 'de' MMMM 'às' hh:mm", {
            locale: ptBR
        })

        const formatedDateDistanceToNow = formatDistanceToNow(post.publishedAt, {
            addSuffix: true,
            locale: ptBR
        })

        const ISOFormat = formatISO9075(post.publishedAt, {
            format: 'extended'
        })

        
        const [comments, setComments] = useState<string[]>([]);
        const [textAreaValue, setTextAreaValue] = useState("");

        console.log(textAreaValue);
        


        function handleFormPublishComment(event: FormEvent){
            event.preventDefault();


            setComments((prevState) => [...prevState, textAreaValue]);

            setTextAreaValue("");
           
        }

        function onDeleteComment(commentDeleted: string){
            const commentWithoutDeletedComment = comments.filter(comment => {
                return comment !== commentDeleted;
            })

            setComments(commentWithoutDeletedComment);
        }

        function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
            event.target.setCustomValidity("Esse campo é obrigatório!")
        }

        function publishComment(event: ChangeEvent<HTMLTextAreaElement>){
            setTextAreaValue(event.target.value);
            event.target.setCustomValidity("");
        }

        const textAreaValueIsEmpty = textAreaValue.length === 0

        return(

            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                    <Avatar src={post.author.avatarURL} isProfilePictureWithBorder/>
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                    </div>
                    <time
                    title={formatedDate} 
                    dateTime={ISOFormat} >
                        {formatedDateDistanceToNow}
                    </time>
                </header>

                <div className={styles.content}>
                    {
                        post. content.map(line => {
                            
                            if(line.type === 'paragraph'){
                                return <p key={line.content}>{line.content}</p>
                                
                            } else if (line.type === 'link'){
                                return <p key={line.content} className={styles.link}><a href="#">{line.content}</a></p>
                            }
                        })
                    }
                      
                </div>

                <form className={styles.commentForm} onSubmit={handleFormPublishComment}>
                    <label>Deixe seu Feedback</label>
                    <textarea
                    name='comment'
                    required 
                    onInvalid={handleNewCommentInvalid}
                    value={textAreaValue}
                    placeholder='Deixe um comentário.' 
                    onChange={publishComment}
                    />
                        
                    <footer>
                    <button 
                    disabled={textAreaValueIsEmpty}
                    type='submit'
                    >Publicar
                    </button>
                    </footer>

    
                </form>

                {
                    comments.map(comment => {
                        
                        return (   
                        <Comment 
                            key={comment} 
                            content={comment}
                            onClick={() => onDeleteComment(comment)}
                        />)
                    })
                }

            </article>
        )
    }

