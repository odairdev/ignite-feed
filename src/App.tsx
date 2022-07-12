import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";

import styles from "./App.module.css";

import "./global.css";
import { Post } from "./components/post/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.",
      },
      {type: 'paragraph', content: 'O nome do projeto é DoctorCare 🚀'},
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-07-09 08:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/odairdev.png",
      name: "Odair José Custodio Junior",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Eaee," },
      {
        type: "paragraph",
        content: "To testando o app do feed!",
      },
    ],
    publishedAt: new Date("2022-07-09 10:00:00"),
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts && posts.map((post) => <Post key={post.id} post={post} />)}
        </main>
      </div>
    </div>
  );
}

export default App;
