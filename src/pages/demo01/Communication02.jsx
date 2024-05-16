import React, {useState} from 'react';

// 组件间的通信
const Communication02 = ({ onGetCommunication}) => {
    const msg = 'this is communication msg'
    return (
        <div>
           <button onClick={() => onGetCommunication(msg)}>点击</button>
        </div>
    );
};

export default Communication02;
