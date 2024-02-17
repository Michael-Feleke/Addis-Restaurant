import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.pizza}>
        <div className={styles.slice}></div>
        <div className={styles.slice}></div>
        <div className={styles.slice}></div>
        <div className={styles.slice}></div>
        <div className={styles.slice}></div>
        <div className={styles.slice}></div>
        <div className={styles.slice}></div>
        <div className={styles.slice}></div>
        <div className={styles.slice}></div>
        <div className={styles.slice}></div>
        <div className={styles.slice}></div>
        <div className={styles.slice}></div>
        <div className={styles.slice}></div>
      </div>
    </div>
  );
}

export default Loader;
