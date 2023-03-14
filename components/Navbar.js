import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/components/Navbar.module.css";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {" "}
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
          <Link href="/members">Members</Link>
          <Link href="/blogs">Blogs</Link>
        </div>

        <div className={styles.socials}>
          <Link href="/">
            <Image src="/socials/discord.svg" height="30" width="30" />
          </Link>
          <Link href="/">
            <Image src="/socials/github.svg" height="30" width="30" />
          </Link>
          <Link href="/">
            <Image src="/socials/twitter.svg" height="30" width="30" />
          </Link>
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
