import {useEffect, useState} from 'react';


const URL = 'http://geek.itheima.net/v1_0/channels'
const UseEffectDemo1 = () => {
    const [list,setList] = useState([])
    useEffect(() => {
        // 获取频道列表
        console.log('Fetching data...');
        async function getList(){
            const res = await fetch(URL)
            const jsonRes = await res.json()
            setList(jsonRes.data.channels)
            console.log('Data fetched:', jsonRes.data.channels);
        }
        getList()
    }, []);
    return (
        <div>
           <ul>
               {list.map(item=><li key={item.id}>{item.name}</li>)}
           </ul>
        </div>
    );
};

export default UseEffectDemo1;
