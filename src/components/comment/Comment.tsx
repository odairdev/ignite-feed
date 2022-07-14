import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../avatar/Avatar";

import styles from "./Comment.module.css";

interface CommentProps {
  content: string
  onDeleteComment: (deletedComment: string) => void;
}

export function Comment({content, onDeleteComment}:CommentProps) {
  const [likes, setLikes] = useState(20)
  const [liked, setLiked] = useState(true)

  const onLike = () => {
    if(liked) {
      setLikes(prevState => prevState - 1)
      setLiked(false)
    } else {
      setLikes(prevState => prevState + 1)
      setLiked(true)
    }
  }

  return (
    <div className={styles.comment}>
      <Avatar avatarURL="https://github.com/diego3g.png" border={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Devon Lane <span>(você)</span></strong>
              
              <time title="23 de junho de 2022" dateTime="2022-06-23">
                Cerca de 2h
              </time>
            </div>

            <button onClick={() => onDeleteComment(content)} title="Deletar comentario">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={onLike} className={liked ? styles.liked : ''}>
            <ThumbsUp size={20} />
             Aplaudir 
            <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
