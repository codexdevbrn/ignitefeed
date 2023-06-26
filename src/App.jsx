import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";
import styles from './App.module.css'

import { PostArray } from "./utils/Posts";

export function App() {

  return (
    <> 
     <Header />
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
      {PostArray.map(post => {
        return (<Post
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
        />)
      })}
      </main>
     </div>
    </>
  )
} 

