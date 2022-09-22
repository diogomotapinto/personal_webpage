import styles from "./Cols.module.scss";

type ColsProps = {
  children: React.ReactNode;
  cols?: string;
  className?: string;
  [key: string]: any;
};
const Cols = (props: ColsProps) => {
  return (
    <div
      {...props}
      className={styles.cols}
      style={{
        gridColumn: props.cols ? ` auto / span ${props.cols}` : "1/8",
      }}
    >
      {props.children}
    </div>
  );
};

export default Cols;
