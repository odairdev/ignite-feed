import { useState } from "react";
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
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <Post />
      </div>
    </div>
  );
}

export default App;
