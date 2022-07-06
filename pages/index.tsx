import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Business Intelligen</title>
        <meta
          name="description"
          content="Business Intelligen Business Intelligence"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <strong style={{ color: "#0c2461" }}>Business Intelligen</strong>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>
            We are developing a great solution for you!
          </code>
        </p>
      </main>
    </div>
  );
};

export default Home;
