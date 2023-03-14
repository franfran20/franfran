import Link from "next/link";
import styles from "../styles/components/Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>An Open Community</p>

      <div className={styles.footerLinks}>
        <Link href="/">
          Twitter <span>|</span>
        </Link>
        <Link href="/">
          Discord <span>|</span>
        </Link>
        <Link href="/">
          Github <span>|</span>
        </Link>
      </div>
    </div>
  );
};
