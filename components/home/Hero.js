import Link from "next/link";
import styles from "../../styles/components/home/Hero.module.css";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <main>
      <div className={styles.hero}>
        <div className={styles.overlay}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, y: "-100vh" }}
            animate={{ opacity: 1, scale: 1.005, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.1,
            }}
          >
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
          </motion.div>
        </div>
      </div>
    </main>
  );
};
