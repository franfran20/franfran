import styles from "../styles/components/AIPoweredDocs.module.css";
import Markprompt from "./Markprompt";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/utils/utils";

export const AIPoweredDocs = () => {
  const textVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: { opacity: 0 },
  };

  return (
    <div className={styles.container}>
      <div className={styles.AIPoweredDocs}>
        <motion.div
          className={styles.textContent}
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
        >
          <h3>Need Quick Clarity?</h3>
          <h4>Ask Our AI-Powered Docs</h4>
          <p>
            You can ask any question you have regarding the OpenData Community
            documentation right here and receive accurate and helpful answers in
            real-time. Say goodbye to the frustration of sifting through endless
            pages of documentation.
          </p>

          <a href={NAV_LINKS["DOCS"]} target="_blank">
            Our Docs &gt;
          </a>
        </motion.div>

        <div className={styles.markPrompt}>
          <Markprompt
            projectKey="Jh6GT8DaEAdSfHfYyNAx55ebMswKgOXq"
            model="gpt-3.5-turbo"
          />
        </div>
      </div>
    </div>
  );
};
