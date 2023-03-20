import styles from "../../styles/components/about/HeroText.module.css";

export const HeroText = () => {
  return (
    <div className={styles.about}>
      <h2>Who Are The Regen Rangers?</h2>
      <p>
        The Regen Rangers are an <span>open-source community</span> originally
        founded by Gitcoin as a part of their efforts to enable communities to
        fund their shared needs. Our mission is to protect web3, focusing on:
      </p>
      <p>
        - Resisting <span>recentralization</span> and potential capture at the
        data layer
      </p>
      <p>
        - <span>Sybil resistance through data science</span> and the development
        of useful algorithms and other approaches
      </p>
    </div>
  );
};
