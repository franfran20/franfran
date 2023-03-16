import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Sidebar.module.css";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/utils/utils";

export const Sidebar = ({ setMenu, menu }) => {
  const handleSetMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <div className={styles.linksAndSocials}>
      <Image
        src="/navbar/go_back.png"
        height="60"
        width="60"
        className={styles.goback}
        onClick={() => handleSetMenu()}
      />

      <div className={styles.links}>
        <motion.a
          href="/members"
          whileHover={{ scale: 1.2, color: "#6ECFEA" }}
          initial={{ scale: 1, color: "#fff" }}
          transition={{ duration: 0.4 }}
        >
          Members
        </motion.a>
        <motion.a
          href="/blogs"
          whileHover={{ scale: 1.2, color: "#6ECFEA" }}
          initial={{ scale: 1, color: "#fff" }}
        >
          Blogs
        </motion.a>
      </div>

      <div className={styles.socials}>
        <motion.a href={SOCIAL_LINKS.discord}>
          <motion.img
            whileHover={{ scale: 1.3 }}
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            src="/socials/discord.svg"
            height="30"
            width="30"
          />
        </motion.a>
        <motion.a href={SOCIAL_LINKS.github}>
          <motion.img
            whileHover={{ scale: 1.3 }}
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            src="/socials/github.svg"
            height="30"
            width="30"
          />
        </motion.a>

        <motion.a href={SOCIAL_LINKS.twitter}>
          <motion.img
            src="/socials/twitter.svg"
            whileHover={{ scale: 1.3 }}
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            height="30"
            width="30"
          />
        </motion.a>
      </div>
    </div>
  );
};
