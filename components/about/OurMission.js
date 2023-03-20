import { motion } from "framer-motion";
import styles from "../../styles/components/about/OurMission.module.css";

export const OurMission = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}> Our Mission</h2>
      <div className={styles.ourMission}>
        <motion.div className={styles.boxes}>
          <motion.img src="/illustrations/piechart.svg" />
          <h3>Web3 Sybil Protection</h3>
          <p>
            To safeguard the integrity of web3 by developing effective
            strategies to combat Sybil attacks. Through the use of data science
            and innovative algorithms, we aim to detect and prevent malicious
            actors from manipulating decentralized networks. By enhancing Sybil
            resistance, we seek to create a more trustworthy and secure web3
            ecosystem for all.
          </p>
        </motion.div>

        <motion.div className={styles.boxes}>
          <motion.img src="/illustrations/magnifying.svg" />
          <h3>Detecting Malicious Behavior</h3>
          <p>
            Our focus is on leveraging data analysis and innovative software to
            detect and prevent malicious behavior across various platforms. By
            developing effective strategies and tools, we aim to create a safer
            and more secure online environment for users.
          </p>
        </motion.div>

        <motion.div className={styles.boxes}>
          <motion.img src="/illustrations/data.svg" />
          <h3>Resisting Recentralization in Data Layer</h3>
          <p>
            resist recentralization and prevent potential capture at the data
            layer. By promoting decentralized approaches and leveraging
            cutting-edge technologies, we seek to create a more open and
            democratic online environment.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
