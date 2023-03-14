import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/components/home/About.module.css";
import { TEXT_TO_DISPLAY } from "../../utils/utils";

export const About = () => {
  const [clickedAbout, setClickedAbout] = useState("Sybil Resistance");
  return (
    <div className={styles.about}>
      <h2>About</h2>

      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.text}>
            <h2>
              <span>|</span>
              {clickedAbout}
            </h2>
            <p>{TEXT_TO_DISPLAY[clickedAbout]}</p>
          </div>

          <div
            className={styles.box}
            onClick={() => setClickedAbout("Sybil Resistance")}
          >
            <Image src="/illustrations/shield.svg" width="500" height="500" />
            <h4>Sybil Resistance</h4>
          </div>
          <div
            className={styles.boxWhite}
            onClick={() => setClickedAbout("Resisting Recentralization")}
          >
            <Image
              src="/illustrations/centralization.svg"
              width="500"
              height="500"
            />
            <h4>Resisting Centralization</h4>
          </div>
        </div>

        <div
          className={styles.boxWhite}
          onClick={() => setClickedAbout("Openess")}
        >
          <Image src="/illustrations/github.svg" width="500" height="500" />
          <h4>Openess</h4>
        </div>
        <div className={styles.box} onClick={() => setClickedAbout("Candor")}>
          <Image src="/illustrations/candor.svg" width="500" height="500" />
          <h4>Candor</h4>
        </div>
        <div
          className={styles.boxWhite}
          onClick={() => setClickedAbout("Inclusive")}
        >
          <Image src="/illustrations/inclusive.svg" width="500" height="500" />
          <h4>Inclusive</h4>
        </div>
        <div
          className={styles.box}
          onClick={() => setClickedAbout("Initiative")}
        >
          <Image src="/illustrations/initiative.svg" width="500" height="500" />
          <h4>Initiative</h4>
        </div>
      </div>
    </div>
  );
};
