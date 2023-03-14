import Image from "next/image";
import styles from "../../styles/components/home/Sponsors.module.css";

export const Sponsors = () => {
  return (
    <div className={styles.sponsors}>
      <p>Powered By</p>
      <Image src="/illustrations/gitcoin.svg" width="700" height="700" />
    </div>
  );
};
