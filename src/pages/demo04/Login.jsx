import {Link, useNavigate} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      this is login
      <Link to='/article'>跳转到Article页面</Link>
      <button onClick={()=> navigate('/article')}>跳转到Article页面</button>
    </div>
  );
};

export default Login;
