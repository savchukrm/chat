import { Subtitle } from '../Subtitle/Subtitle';
import landingStyles from '../landingStyles';

const AboutRoles = () => {
  return (
    <section style={landingStyles.aboutRoles}>
      <div style={landingStyles.container}>
        <Subtitle
          titleAccent="You can be  "
          title="anyone"
          text=" Even the second Elon Musk. We protect your privacy. You can choose any nickname and profile photo."
        />
        <img src="" alt="" width={1126} height={412} />
      </div>
    </section>
  );
};

export default AboutRoles;
