import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Sidebar.module.css";
import { motion } from "framer-motion";

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
        <Link href="/">Members</Link>
        <Link href="/">Blogs</Link>
      </div>

      <div className={styles.socials}>
        <motion.a href="/" animate={{ scale: 1.3 }}>
          <Image src="/socials/discord.svg" height="30" width="30" />
        </motion.a>
        <motion.a href="/" animate={{ scale: 1.3 }}>
          <Image src="/socials/github.svg" height="30" width="30" />
        </motion.a>
        <motion.a href="/" animate={{ scale: 1.3 }}>
          <Image src="/socials/twitter.svg" height="30" width="30" />
        </motion.a>
      </div>
    </div>
  );
};
