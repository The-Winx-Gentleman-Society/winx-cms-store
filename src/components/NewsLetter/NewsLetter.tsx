import styles from "./NewsLetter.module.css";

function NewsLetter() {
  return (
    <div className={styles["newsletter--container"]}>
      <p className={styles["newsletter--title"]}>Assine a nossa Newsletter</p>
      <div className={styles["newsletter--field-container"]}>
        <input type="text" className={styles["newsletter--field"]}/>
        <input type="button" value="ENVIAR" className={styles["newsletter--button"]}/>
      </div>
    </div>
  )
}

export default NewsLetter;
