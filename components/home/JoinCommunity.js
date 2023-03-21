import Link from "next/link";
import styles from "../../styles/components/home/JoinCommunity.module.css";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/utils/utils";

export const JoinCommunity = () => {
  return (
    <div className={styles.joinCommunity}>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.3,
              type: "spring",
              stiffness: 100,
            },
          },
          hidden: {
            opacity: 0,
            x: "-40vw",
          },
        }}
      >
        Join Us On Discord!
      </motion.h2>
      <motion.a
        href={SOCIAL_LINKS.discord}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.3,
              type: "spring",
              stiffness: 100,
            },
          },
          hidden: {
            opacity: 0,
            x: "-30vw",
          },
        }}
      >
        Get Involved &gt;
      </motion.a>
    </div>
  );
};
