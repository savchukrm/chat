import React from 'react';

import LoadingBlock from '../Loading/LoadingBlock';
import LoginBlock from '../Auth/Login/LoginBlock';
import SignupBlock from '../Auth/Signup/SignupBlock';
import VerifyBlock from '../Auth/Verify/VerifyBlock';
import ForgotPasswordBlock from '../Auth/ChangePassword/ForgotPasswordBlock';

interface GreetModalsProps {
  signModal: boolean;
  logModal: boolean;
  verifyModal: boolean;
  loadingModal: boolean;
  forgotPasswordModal: boolean;

  setLogModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSignModal: React.Dispatch<React.SetStateAction<boolean>>;
  setVerifyModal: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadingModal: React.Dispatch<React.SetStateAction<boolean>>;
  setForgotPasswordModal: React.Dispatch<React.SetStateAction<boolean>>;
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
  forgotPasswordModal,
  setForgotPasswordModal,
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
          setForgotPasswordModal={setForgotPasswordModal}
        />
      )}

      {verifyModal && <VerifyBlock setVerifyModal={setVerifyModal} />}

      {forgotPasswordModal && (
        <ForgotPasswordBlock
          setLoadingModal={setLoadingModal}
          setForgotPasswordModal={setForgotPasswordModal}
        />
      )}

      {loadingModal && <LoadingBlock />}
    </div>
  );
};

export default GreetModals;
