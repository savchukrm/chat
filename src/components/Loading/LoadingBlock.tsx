import { RiLoader2Line } from 'react-icons/ri';

const LoadingBlock = () => {
  return (
    <div className="modalBlock">
      <div className="modalContainer modalLoading">
        <div style={{ display: 'flex' }}>
          <RiLoader2Line size={24} />

          <h3 style={{ fontWeight: 500, paddingLeft: 10 }}>Loading...</h3>
        </div>
      </div>
    </div>
  );
};

export default LoadingBlock;
