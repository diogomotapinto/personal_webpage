import Head from "next/head";
import Background from "../components/Background";
import Nav from "../components/Nav";
import styles from "./MainLayout.module.scss";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Head>Layout</Head>
      <Nav></Nav>
      <Background></Background>
      <main className={styles.mainLayout}>{children}</main>
    </>
  );
};

export default MainLayout;
