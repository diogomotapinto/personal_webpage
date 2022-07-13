import styles from "./Rows.module.scss";

type RowsProps = {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
};
const Rows = (props: RowsProps) => {
  return (
    <div {...props} className={styles.rows}>
      {props.children}
    </div>
  );
};

export default Rows;
