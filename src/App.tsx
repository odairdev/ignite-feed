import { useState } from 'react'
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'

import styles from './App.module.css'

import './global.css'
import { Post } from './components/post/Post'

function App() {

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <Post />
      </div>
    </div>
  )
}

export default App
