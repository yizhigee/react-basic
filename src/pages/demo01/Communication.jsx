import React from 'react';

// 组件间的通信
const Communication = (props) => {
    return (
        <div>
            {props.name}
            <br/>
            jsx:{props.child}

            {props.children}
        </div>
    );
};

export default Communication;
