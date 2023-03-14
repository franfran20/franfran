import Link from "next/link";
import styles from "../../styles/components/home/Hero.module.css";

export const Hero = () => {
  return (
    <main>
      <div className={styles.hero}>
        <div className={styles.overlay}>
          <div className={styles.textContent}>
            <h2>
              Regen <span>| Rangers</span>
            </h2>
            <p>
              The Regen rangers are a dedicated group of data scientists that
              commit to web3 fraud focusing on Sybil resistance through data
              science and the development of useful algorithms and other
              approaches
            </p>
            <Link href="/">Members</Link>
          </div>
        </div>
      </div>
    </main>
  );
};
