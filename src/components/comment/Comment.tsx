import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../avatar/Avatar";

import styles from "./Comment.module.css";

interface CommentProps {
  content: string
}

export function Comment({content}:CommentProps) {
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

            <button title="Deletar comentario">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
             Aplaudir 
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
