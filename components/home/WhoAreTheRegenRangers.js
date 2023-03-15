import styles from "../../styles/components/home/WhoAreTheRegenRangers.module.css";
import { motion } from "framer-motion";

export const WhoAreTheRegenRangers = () => {
  return (
    <div className={styles.WhoAreTheRegenRangers}>
      {
        <motion.img
          src="/illustrations/flag.svg"
          width="800"
          height="800"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        />
      }

      {
        <motion.div
          className={styles.text}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 1.2,
            type: "spring",
          }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
            transition: { duration: 0.3 },
          }}
        >
          <h2>
            Who Are The <span>Regen Rangers</span> ?
          </h2>

          <p>
            The <span>Regen Rangers</span> are an{" "}
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
