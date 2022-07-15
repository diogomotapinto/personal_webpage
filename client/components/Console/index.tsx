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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          nulla necessitatibus temporibus repellat. Facere, aliquid officiis!
        </h1>
      </div>
    </div>
  );
};

export default Console;
