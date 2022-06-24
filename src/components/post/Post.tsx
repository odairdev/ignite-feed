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
        <time title="23 de junho de 2022" dateTime="2022-06-23" style={{ fontSize: "1rem", whiteSpace: "nowrap" }}>
          Publicado há 1h
        </time>
      </header>
      <p className={styles.postMessage}>
        Fala galeraa 👋 <br /> <br /> Acabei de subir mais um projeto no meu portifa. É um
        projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é
        DoctorCare 🚀 <br /> <br /> 👉 jane.design/doctorcare <br /> <br /> #novoprojeto #nlw #rocketseat 
      </p>

      <div className={styles.createFeedback}>
        <strong>Deixe seu feedback</strong>

        <textarea>

        </textarea>

        <button type="button">Publicar</button>
      </div>
    </article>
  );
}
