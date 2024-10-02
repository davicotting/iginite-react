
  import { Post } from "./components/Post";
  import { Header } from "./components/Header";
  import { Sidebar } from "./components/Sidebar";
  import './global.css';
  import { PostType } from "./components/Post";
  import styles from './App.module.css';


  export function App(){

    const posts: PostType[] = 
    [
    
      {
        id: 1,

        author: {

        name: "Davi Cotting",
        avatarURL: "https://github.com/davicotting.png",
        role: "Front-End Developer",

        },

        content: [

          { type: "paragraph", content: "Falaa Dev! Blz?" },
          { type: "paragraph", content: "Quero compartilhar com vcs meu novo projeto" },
          { type: "paragraph", content: "Esse é meu primeiro projeto full-stack. 👨🏼‍💻" },
          { type: "paragraph", content: "O primeiro link é meu projeto, o segundo é meu perfil no GitHub." },

          {type: "link", content: "https://rocketnotes-deploy.netlify.app/"},
          {type: "link", content: "https://github.com/linustorvalds"}
          
        ],

        publishedAt: new Date('2024-08-08 10:58'),
        
    },

    {
      id: 2,

      author: {

      name: "Antonio Mesquita",
      avatarURL: "https://github.com/antoniomesquit.png",
      role: "Back-End Developer",

      },

      content: [

        { type: "paragraph", content: "Tudo de boa contigo?" },
        { type: "paragraph", content: "Me chamo Antonio Mesquita," },
        { type: "paragraph", content: "To fazendo meu primeiro post por aqui!" },
        { type: "paragraph", content: "Me segue no GitHub." },

        {type: "link", content: "https://rocketnotes-deploy.netlify.app/"},
        {type: "link", content: "https://github.com/antoniomesquit"}
        
      ],

      publishedAt: new Date('2024-08-08 10:58'),
      
  },

  {
    id: 3,

    author: {

    name: "Italo Miranda",
    avatarURL: "https://github.com/Ital023.png",
    role: "Back-End Developer",

    },

    content: [

      { type: "paragraph", content: "👉 Bora pro front-end day!!!" },

      {type: "link", content: "https://github.com/Ital023"}
      
    ],

    publishedAt: new Date('2024-08-08 10:58'),
    
    },

    ];
    
    return(

      <div>
        <Header/>
        <main className={styles.content}>

        <Sidebar/>

        <div>
        
        {

          posts.map(post => {
            return(
              <Post 
              key={post.id} 
              post={post} />
            )
          })

        }

        </div>

        </main>
      </div>
    )
  }