import styles from "../styles/components/WhoAreTheRegenRangers.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS } from "@/utils/utils";

export const WhoAreTheRegenRangers = () => {
  return (
    <div className={styles.WhoAreTheRegenRangers}>
      <motion.img
        src="/Illustrations/star.svg"
        width="800"
        height="800"
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
          hidden: { y: "-20vh" },
        }}
      />

      {
        <motion.div
          className={styles.textContent}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              x: 0,
              transition: {
                type: "spring",
                stiffness: 100,
              },
            },
            hidden: { x: "20vw" },
          }}
        >
          <h2>Who are the Regen Rangers?</h2>

          <p>
            Inspired by the{" "}
            <span className={styles.purple}>
              Black Rock Rangers of Burning Man
            </span>
            , we believe web3 can police ourselves.
          </p>

          <p>
            Black Rock Rangers commit to{" "}
            <span className={styles.purple}>
              using data science and software for good
            </span>
            . They earn their status by contributing open source algorithms and
            other software and by helping web3 communities in their use of these
            approaches. And they take the Regen Ranger Oath that commits them to
            fight fraudsters while supporting decentralization at the data
            layer.
          </p>

          <a href={NAV_LINKS["LEGOS"]}>Legos &gt;</a>
        </motion.div>
      }
    </div>
  );
};
