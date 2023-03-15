import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/components/home/About.module.css";
import { TEXT_TO_DISPLAY } from "../../utils/utils";
import { motion } from "framer-motion";

export const About = () => {
  const [clickedAbout, setClickedAbout] = useState("Sybil Resistance");
  return (
    <div className={styles.about}>
      <h2>About</h2>

      <div className={styles.content}>
        <div className={styles.top}>
          <motion.div
            className={styles.text}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                opacity: 1,
                scale: 0.8,
                transition: {
                  duration: 2,
                },
              },
              hidden: {
                opacity: 0,
              },
            }}
          >
            <h2>
              <span>|</span>
              {clickedAbout}
            </h2>
            <p>{TEXT_TO_DISPLAY[clickedAbout]}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  duration: 2,
                },
              },
              hidden: {
                opacity: 0,
              },
            }}
            className={styles.box}
            onClick={() => setClickedAbout("Sybil Resistance")}
          >
            <Image src="/illustrations/shield.svg" width="500" height="500" />
            <h4>Sybil Resistance</h4>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  duration: 2,
                },
              },
              hidden: {
                opacity: 0,
              },
            }}
            className={styles.boxWhite}
            onClick={() => setClickedAbout("Resisting Recentralization")}
          >
            <Image
              src="/illustrations/centralization.svg"
              width="500"
              height="500"
            />
            <h4>Resisting Centralization</h4>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                duration: 2,
              },
            },
            hidden: {
              opacity: 0,
            },
          }}
          className={styles.boxWhite}
          onClick={() => setClickedAbout("Openess")}
        >
          <Image src="/illustrations/github.svg" width="500" height="500" />
          <h4>Openess</h4>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                duration: 2,
              },
            },
            hidden: {
              opacity: 0,
            },
          }}
          className={styles.box}
          onClick={() => setClickedAbout("Candor")}
        >
          <Image src="/illustrations/candor.svg" width="500" height="500" />
          <h4>Candor</h4>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                duration: 2,
              },
            },
            hidden: {
              opacity: 0,
            },
          }}
          className={styles.boxWhite}
          onClick={() => setClickedAbout("Inclusive")}
        >
          <Image src="/illustrations/inclusive.svg" width="500" height="500" />
          <h4>Inclusive</h4>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                duration: 2,
              },
            },
            hidden: {
              opacity: 0,
            },
          }}
          className={styles.box}
          onClick={() => setClickedAbout("Initiative")}
        >
          <Image src="/illustrations/initiative.svg" width="500" height="500" />
          <h4>Initiative</h4>
        </motion.div>
      </div>
    </div>
  );
};
