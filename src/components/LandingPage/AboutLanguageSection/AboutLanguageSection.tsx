import { FC } from 'react';
import landingStyles from '../landingStyles';

interface ILanguageSection {
  openSighUp: () => void;
}
const AboutLanguageSection: FC<ILanguageSection> = ({ openSighUp }) => {
  return (
    <section style={landingStyles.aboutLanguage}>
      <div style={landingStyles.container}>
        <div style={landingStyles.aboutLanguageWrapper}>
          <div style={landingStyles.aboutLanguageBox}>
            <p style={landingStyles.aboutLanguageTitle}>
              Don’t worry about language
            </p>
            <p style={landingStyles.aboutLanguageText}>
              The world's most popular languages ​​are spoken here. If you have
              not yet found a chat in your native language, please study English
              :) Meanwhile, our developers will add your language.
            </p>
          </div>
          <button style={landingStyles.aboutLanguageBtn} onClick={openSighUp}>
            Create free account
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutLanguageSection;
