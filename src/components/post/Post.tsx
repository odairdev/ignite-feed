import { format, formatDistanceToNow } from "date-fns";
import ptBr from 'date-fns/locale/pt-BR'
import { FormEvent, useState } from "react";

import { Avatar } from "../avatar/Avatar";
import { Comment } from "../comment/Comment";
import styles from "./Post.module.css";

interface PostProps {
  post: {
    id: number;
    author: {
      avatarUrl: string;
      name: string;
      role: string;
    },
    content: Array<{
      type: string;
      content: string
    }>,
    publishedAt: Date
  }
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState([
    'Muito bom, parabééns!',
    'Show de bola!'

  ])
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    setComments([...comments, feedback])
    setFeedback('')
  }

  const publishedDateFormated = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  })

  const dateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header className={styles.profile}>
        <div className={styles.profileContent}>
          <Avatar avatarURL={post.author.avatarUrl} />

          <div>
            <p>{post.author.name}</p>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormated}
          dateTime={post.publishedAt.toISOString()}
          style={{ fontSize: "1rem", whiteSpace: "nowrap" }}
        >
          Publicado {dateRelativeToNow}
        </time>
      </header>
      <div className={styles.postMessage}>
        {post.content.map(sentence => {
          if(sentence.type === 'paragraph') {
            return (
              <p key={sentence.content}>{sentence.content}</p>
            )
          } else {
            return (
              <p><a key={sentence.content} href="#">{sentence.content}</a></p>
            )
          }
        })}
      </div>

      <form className={styles.createFeedback} onSubmit={handleSubmit}>
        <strong>Deixe seu feedback</strong>

        <textarea onChange={e => setFeedback(e.target.value)} value={feedback} placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments && comments.map(comment => (
          <Comment content={comment}/>
        ))}
      </div>
    </article>
  );
}
