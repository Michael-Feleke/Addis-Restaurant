import styles from "./Loader.module.css";

function Loader() {
  return (
    <div
      className={`${styles.loadingContainer} absolute bg-slate-200/20 backdrop-blur-sm`}
    >
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
