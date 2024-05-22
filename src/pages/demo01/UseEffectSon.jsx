import {useEffect} from 'react';

const UseEffectSon = () => {
  useEffect(() => {
    const timer = setInterval(()=>{
      console.log('定时器执行中....')
    },1000)

    return () => {
      clearInterval(timer)
    }
  }, []);
  return (
    <div>
        this is son
    </div>
  );
};

export default UseEffectSon;
