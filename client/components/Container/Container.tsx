import styles from "./Container.module.scss";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
};

const Container = (props: ContainerProps) => {
  return (
    <div {...props} className={styles.container}>
      {props.children}
    </div>
  );
};

export default Container;
