import Subtitle from '../Subtitle/Subtitle';
import landingStyles from '../landingStyles';

const AboutInterestsSection = () => {
  return (
    <section style={landingStyles.aboutInterests}>
      <div style={landingStyles.container}>
        <Subtitle
          titleAccent="Talk about "
          title="what interesrs you and people like you"
          text=" Just sign up and start looking for like-minded friends. What if they live on your street?"
        />
        <img src="" alt="" width={894} height={448} />
      </div>
    </section>
  );
};

export default AboutInterestsSection;
