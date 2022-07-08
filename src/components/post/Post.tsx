import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.profile}>
        <div className={styles.profileContent}>
          <div className={styles.avatar}>
            <img src="https://github.com/odairdev.png" alt="avatar" />
          </div>
          <div>
            <p>Odair J. C. Junior</p>
            <span>Developer</span>
          </div>
        </div>
        <time
          title="23 de junho de 2022"
          dateTime="2022-06-23"
          style={{ fontSize: "1rem", whiteSpace: "nowrap" }}
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.postMessage}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}
        </p>
        <p>
          <p>
            <a href="#">👉 jane.design/doctorcare</a>{" "}
          </p>
          <p>
            <a href="#">#novoprojeto</a>{' '}
            <a href="#">#nlw</a>{' '}
            <a href="#">#rocketseat</a>
          </p>
        </p>
      </div>

      <div className={styles.createFeedback}>
        <strong>Deixe seu feedback</strong>

        <textarea />

        <button type="button">Publicar</button>
      </div>
    </article>
  );
}
