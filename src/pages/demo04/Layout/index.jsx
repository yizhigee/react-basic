import {Link, Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      this is layout <br/>
      <Link to='/board'>board</Link>
      <Link to='/about'>about</Link>
      <Outlet/>
    </div>
  );
};

export default Layout;
