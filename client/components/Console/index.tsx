import styles from "./Console.module.scss";

const Console = () => {
  return (
    <div className={styles.leftSide}>
      <span className={styles.typeBar}>
        ❯
        <div className={styles.typewriter}>
          <h1>ls</h1>
        </div>
      </span>
      <div className={styles.result}>
        <h1>
          <p>drwxr-xr-x 9 staff 288 Jul 15 19:00 .next</p>
          <p>drwxr-xr-x 4 staff 128 Jul 14 11:57 .storybook</p>
          <p>-rw-r--r-- 1 staff 1582 Jul 14 11:57 README.md</p>
          <p>drwxr-xr-x 14 staff 448 Jul 15 18:45 components</p>
        </h1>
      </div>
    </div>
  );
};

export default Console;
