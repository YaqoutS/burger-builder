import Layout from "@/components/Layout";
import styles from "./page.module.css";
import BurgerBuilder from "@/components/BurgerBuilder";

export default function Home() {
  return (
    <main className={styles.main}>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </main>
  );
}
