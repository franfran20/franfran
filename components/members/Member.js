import Image from "next/image";
import styles from "../../styles/components/members/Member.module.css";

export const Member = ({ name, bio }) => {
  return (
    <div className={styles.member}>
      <Image src="/dummy/dummy41.jpg" width="500" height="500" />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
};
