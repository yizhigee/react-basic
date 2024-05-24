import {Link, useNavigate} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      this is login
      <Link to='/article'>跳转到Article页面</Link>
      <button onClick={()=> navigate('/article')}>跳转到Article页面</button>
      <button onClick={()=> navigate('/article?id=1001&name=yizhige')}>跳转到Article页面-params传参</button>
      <button onClick={()=> navigate('/article/1002/yizhige')}>path传承</button>
    </div>
  );
};

export default Login;
