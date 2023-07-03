import React from 'react';

import LoadingBlock from '../Loading/LoadingBlock';
import LoginBlock from '../Auth/Login/LoginBlock';
import SignupBlock from '../Auth/Signup/SignupBlock';
import VerifyBlock from '../Auth/Verify/VerifyBlock';

interface GreetModalsProps {
  signModal: boolean;
  logModal: boolean;
  verifyModal: boolean;
  loadingModal: boolean;
  setLogModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSignModal: React.Dispatch<React.SetStateAction<boolean>>;
  setVerifyModal: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadingModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const GreetModals: React.FC<GreetModalsProps> = ({
  logModal,
  signModal,
  verifyModal,
  loadingModal,
  setLogModal,
  setSignModal,
  setVerifyModal,
  setLoadingModal,
}) => {
  return (
    <div>
      {signModal && (
        <SignupBlock
          setSignModal={setSignModal}
          setVerifyModal={setVerifyModal}
          setLoadingModal={setLoadingModal}
        />
      )}
      {logModal && (
        <LoginBlock
          setLogModal={setLogModal}
          setLoadingModal={setLoadingModal}
          setVerifyModal={setVerifyModal}
        />
      )}
      {verifyModal && <VerifyBlock setVerifyModal={setVerifyModal} />}
      {loadingModal && <LoadingBlock />}
    </div>
  );
};

export default GreetModals;
