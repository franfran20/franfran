import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/components/about/CoreValues.module.css";
import { IMAGE_TO_DISPLAY, TEXT_TO_DISPLAY } from "../../utils/utils";
import { motion } from "framer-motion";

export const CoreValues = () => {
  const [clickedAbout, setClickedAbout] = useState("Sybil Resistance");

  return (
    <div className={styles.coreValues}>
      <h2> Core Values</h2>

      <div className={styles.content}>
        <div className={styles.left}>
          <motion.div
            className={styles.text}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 200,
                },
              },
              hidden: {
                x: "20vw",
              },
            }}
          >
            <img src={IMAGE_TO_DISPLAY[clickedAbout]} />
            <h2>
              <span>|</span>
              {clickedAbout}
            </h2>
            <p>{TEXT_TO_DISPLAY[clickedAbout]}</p>
          </motion.div>
        </div>

        <motion.div
          className={styles.right}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              y: 0,
              transition: {
                type: "spring",
                stiffness: 200,
              },
            },
            hidden: {
              y: "20vh",
            },
          }}
        >
          <div
            className={styles.boxPurple}
            onClick={() => {
              setClickedAbout("Sybil Resistance");
            }}
          >
            <Image src="/illustrations/shield.svg" width="500" height="500" />
            <h4>Sybil Resistance</h4>
            <p>
              By analyzing patterns of behavior and identifying
              fraudulentactivities, we create algorithms that detect and prevent
              Sybil attacks.
            </p>
          </div>

          <div
            className={styles.box}
            onClick={() => {
              setClickedAbout("Resisting Recentralization");
            }}
          >
            <Image
              src="/illustrations/centralizationPurple.svg"
              width="500"
              height="500"
            />
            <h4>Resisting Centralization</h4>
            <p>
              By promoting transparency and actively working to prevent
              malicious actors from taking control of the network, we believe we
              can help protect the integrity of decentralized systems .
            </p>
          </div>

          <div
            className={styles.box}
            onClick={() => {
              setClickedAbout("Candor");
            }}
          >
            <Image
              src="/illustrations/candorPurple.svg"
              width="500"
              height="500"
            />
            <h4>Candor</h4>
            <p>
              By presenting data and analysis in a transparent and
              straightforward manner, we can promote trust and understanding
              among the wider community.
            </p>
          </div>

          <div
            className={styles.boxPurple}
            onClick={() => {
              setClickedAbout("Openess");
            }}
          >
            <Image src="/illustrations/github.svg" width="500" height="500" />
            <h4>Openess</h4>
            <p>
              By working in public and actively requesting input from the wider
              community, we can better understand the risks and vulnerabilities
              associated with Sybil attacks and develop effective strategies to
              prevent them.
            </p>
          </div>

          <div
            className={styles.boxPurple}
            onClick={() => {
              setClickedAbout("Inclusive");
            }}
          >
            <Image
              src="/illustrations/inclusive.svg"
              width="500"
              height="500"
            />
            <h4>Inclusive</h4>
            <p>
              We believe that making a particular effort to welcome and invite a
              breadth of perspectives is key to developing robust and equitable
              solutions to complex problems.
            </p>
          </div>

          <div
            className={styles.box}
            onClick={() => {
              setClickedAbout("Initiative");
            }}
          >
            <Image
              src="/illustrations/initiativePurple.svg"
              width="500"
              height="500"
            />
            <h4>Initiative</h4>
            <p>
              We value individuals who are willing to take on responsibility and
              actively seek out opportunities to make a meaningful impact.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
