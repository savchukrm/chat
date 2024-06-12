import { FC } from 'react';
import landingStyles from '../landingStyles';
import './style.css';

interface ISubtitle {
  titleAccent: string;
  title: string;
  text: string;
}

const Subtitle: FC<ISubtitle> = ({ titleAccent, title, text }) => {
  return (
    <div style={landingStyles.subtitleContainer}>
      <h3 style={landingStyles.title}>
        <span className="titleAccent">{titleAccent}</span>
        {title}
      </h3>
      <p style={landingStyles.text}>{text}</p>
    </div>
  );
};

export { Subtitle };
