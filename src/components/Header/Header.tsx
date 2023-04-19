import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles["fakeheader"]}></div>
      <header className={styles["header"]}>
        LOGO
        <nav className={styles["navigation"]}>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
        </nav>
      </header>
    </>
  )
}

export default Header;
