import styles from "../../styles/components/home/WhoAreTheRegenRangers.module.css";
import { motion } from "framer-motion";

export const WhoAreTheRegenRangers = () => {
  return (
    <div className={styles.WhoAreTheRegenRangers}>
      <div className={styles.imgContainer}>
        <motion.img
          src="/illustrations/atom.svg"
          width="800"
          height="800"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, transition: { duration: 1 } },
            hidden: { opacity: 0 },
          }}
        />
      </div>

      {
        <motion.div
          className={styles.text}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              y: 0,
              transition: {
                type: "spring",
                stiffness: 180,
              },
            },
            hidden: { y: "20vh" },
          }}
        >
          <h2>Who Are We ?</h2>

          <p>
            The <span>Regen Rangers</span> are an
            <span>open-source community</span> originally founded by Gitcoin as
            a part of their efforts to enable communities to fund their shared
            needs. Our mission is to protect web3, focusing on:
          </p>

          <p>
            - <span>Sybil resistance through data science</span> and the
            development of useful algorithms and other approaches
          </p>

          <p>
            - <span>Resisting recentralization</span> and potential capture at
            the data layer
          </p>
        </motion.div>
      }
    </div>
  );
};
