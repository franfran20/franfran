import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/components/Navbar.module.css";
import { Sidebar } from "./Sidebar";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/utils/utils";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <Image
            src="/navbar/regen_logo.png"
            height="500"
            width="500"
            className={styles.logo}
          />
        </Link>

        <div className={styles.links}>
          <motion.a href="/members" whileHover={{ scale: 1.2 }}>
            Members
          </motion.a>
          <motion.a href="/blogs" whileHover={{ scale: 1.2 }}>
            Blogs
          </motion.a>
        </div>

        <div className={styles.socials}>
          <motion.a href={SOCIAL_LINKS.discord} whileHover={{ scale: 1.5 }}>
            <Image src="/socials/discord.svg" height="30" width="30" />
          </motion.a>
          <motion.a href={SOCIAL_LINKS.github} whileHover={{ scale: 1.5 }}>
            <Image src="/socials/github.svg" height="30" width="30" />
          </motion.a>
          <motion.a href={SOCIAL_LINKS.twitter} whileHover={{ scale: 1.5 }}>
            <Image src="/socials/twitter.svg" height="30" width="30" />
          </motion.a>
        </div>

        {!openMenu && (
          <Image
            src="/navbar/menu.png"
            height="500"
            width="500"
            className={styles.menu}
            onClick={() => setOpenMenu((prev) => !prev)}
          />
        )}
      </nav>
      {openMenu && <Sidebar setMenu={setOpenMenu} menu={openMenu} />}
    </>
  );
};
