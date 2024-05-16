
// 组件间的通信
const Communication02 = ({ onGetCommunication}) => {
    const msg = 'test 小刘'
    return (
        <div>
           <button onClick={() => onGetCommunication(msg)}>点击</button>
        </div>
    );
};

export default Communication02;
