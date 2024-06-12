const section = {
  chatSection: {
    backgroundColor: '#1e1336',
  },
};

const landingStyles = {
  subtitleContainer: { marginBottom: 72, maxWidth: 724 },
  aboutChatSection: {
    ...section.chatSection,
    paddingTop: 33,
    paddingBottom: 33,
  },
  aboutInterests: {
    ...section.chatSection,
    paddingTop: 81,
    paddingBottom: 98,
  },
  aboutLanguage: {
    ...section.chatSection,
    paddingTop: 62,
    paddingBottom: 53,
  },
  aboutRoles: {
    ...section.chatSection,
    paddingTop: 30,
    paddingBottom: 159,
  },
  container: {
    maxWidth: 1440,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    textAlign: 'center' as 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 40,
    marginBottom: 36,
  },
  text: {
    color: '#8387a1',
    fontSize: 18,
    lineHeight: '167%',
  },
  aboutChatList: {
    display: 'flex',
    gap: 72,
  },
  aboutChatItem: { width: 290 },
  titleItem: { color: '#fff', fontWeight: 600, fontSize: 26 },
  textItem: { marginTop: 12, color: '#8387a1', lineHeight: '150%' },
  aboutLanguageWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center' as 'center',
    backgroundColor: '#F0CD4E',
    borderRadius: 24,
    paddingTop: 36,
    paddingBottom: 36,
    paddingRight: 60,
    paddingLeft: 60,
    width: 1126,
    height: 288,
  },
  aboutLanguageBox: {
    width: 430,
    textAlign: 'start' as 'start',
  },
  aboutLanguageTitle: { fontWeight: 600, fontSize: 40, color: '#000' },
  aboutLanguageText: {
    fontSize: 16,
    lineHeight: '150%',
    color: '#313338',
    marginTop: 20,
  },
  aboutLanguageBtn: {
    borderRadius: 4,
    backgroundColor: '#fff',
    color: '#000',
    padding: '17px 26px',
    height: 64,
  },
};

export default landingStyles;
