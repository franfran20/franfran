import Link from "next/link";
import styles from "../../styles/components/home/Hero.module.css";
import { motion, MotionConfig } from "framer-motion";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.imgContainer}>
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              y: 0,
            },
            hidden: {
              y: "-30vh",
            },
          }}
          whileHover={{
            y: -30,
          }}
          src="/illustrations/robot_illustration.svg"
        />
      </div>

      <motion.div
        className={styles.textContent}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            y: 0,
            transition: {
              type: "spring",
              stiffness: 150,
            },
          },
          hidden: { y: "-30vh" },
        }}
        whileHover={{
          y: -30,
        }}
      >
        <h2>
          The Regen <span> Rangers</span>
        </h2>
        <p>
          The Regen rangers are a dedicated group of data scientists that commit
          to web3 fraud focusing on Sybil resistance through data science and
          the development of useful algorithms and other approaches
        </p>
        <Link href="/members">Learn More &gt;</Link>
      </motion.div>
    </div>
  );
};
