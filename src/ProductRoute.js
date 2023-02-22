import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./component/Sidebar";

const PrivateRoute = () => {
  let isAuth = JSON.parse(localStorage.getItem("UserDetails"));

  if (!isAuth) {
    console.log("called");
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <div>
        <div>
          <Sidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrivateRoute;
