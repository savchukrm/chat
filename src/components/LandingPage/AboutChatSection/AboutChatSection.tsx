import {
  illustration,
  illustrationThree,
  illystrationTwo,
} from '../../../constants/images';
import { Subtitle } from '../Subtitle/Subtitle';
import landingStyles from '../landingStyles';

const AboutChatSection = () => {
  return (
    <section style={landingStyles.aboutChatSection}>
      <div style={landingStyles.container}>
        <Subtitle
          titleAccent="Chat rooms "
          title="to talk to people around the world"
          text="Oktotalk is a new chat website. Our rooms are easy to use for both a gaming teenager and a conservative granny. Here you can ask people about Madonna's new album or the recipe for potato balls."
        />

        <ul style={landingStyles.aboutChatList}>
          <li style={landingStyles.aboutChatItem}>
            <img src={illustration} alt="" width={290} height={252} />
            <p style={landingStyles.titleItem}>Always at hand</p>
            <p style={landingStyles.textItem}>
              Just open the web app and start chatting anytime.
            </p>
          </li>
          <li style={landingStyles.aboutChatItem}>
            <img src={illystrationTwo} alt="" width={290} height={252} />
            <p style={landingStyles.titleItem}>Matches your taste</p>
            <p style={landingStyles.textItem}>
              We recommend chats according to your interests.
            </p>
          </li>
          <li style={landingStyles.aboutChatItem}>
            <img src={illustrationThree} alt="" width={290} height={252} />
            <p style={landingStyles.titleItem}>Free communication</p>
            <p style={landingStyles.textItem}>
              It is free. Just register and start chatting. No paid
              subscriptions.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutChatSection;
