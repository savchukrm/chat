import React, { FC } from 'react';
import SelectSettingTitle from '../SelectSettingTitle';
import ButtonWhite from '../../../Buttons/ButtonWhite/ButtonWhite';
import { HiPencil } from 'react-icons/hi2';

interface IMyProfile {
  name: string;
  language: string;
}
const MyProfile: FC<IMyProfile> = ({ name, language }) => {
  return (
    <div>
      <SelectSettingTitle
        title="Choose how you appear and what you see on Oktotalk"
        text="Signed in as yabazilev@gmail.com"
      />
      <div style={styles.editWrapper}>
        <div style={styles.editContainer}>
          <div>
            <img src="" alt="" style={styles.editPhoto} />
            {/* позже тут сделать пропс на ссылку фото */}
            <p style={styles.editText}>Your profile photo</p>
          </div>
          <ButtonWhite icon={<HiPencil style={styles.btnIcon} />} text="Edit" />
        </div>
        <div style={styles.editContainer}>
          <div>
            <p style={styles.editInfo}>{name}</p>
            <p style={styles.editText}>Your profile photo</p>
          </div>
          <ButtonWhite icon={<HiPencil style={styles.btnIcon} />} text="Edit" />
        </div>
        <div style={styles.editContainer}>
          <div>
            <p style={styles.editInfo}>{language}</p>
            <p style={styles.editText}>Your language</p>
          </div>
          <ButtonWhite icon={<HiPencil style={styles.btnIcon} />} text="Edit" />
        </div>
      </div>
    </div>
  );
};

const styles = {
  editWrapper: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: 24,
    width: 337,
  },
  editContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  editText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: '125%',
    marginTop: 4,
  },
  editPhoto: {
    width: 47,
    height: 47,
    borderRadius: 50,
  },
  editInfo: {
    fontSize: 14,
    lineHeight: '143%',
    color: '#b6b6b6',
  },
  btnIcon: { width: 14, height: 14 },
};

export default MyProfile;
