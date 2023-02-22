import Login from "./component/Login";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./ProductRoute";
import UserForm from "./component/UserForm";
import Form from "./component/Form";
import UserTable from "./component/UserTable";
import QrCode from "./component/QrCode";

function Home() {
  return (
    <div className="App">
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<UserForm />} />
              <Route path="/form" element={<Form />} />
              <Route path="/table" element={<UserTable />} />
              <Route path="/code" element={<QrCode />} />
            </Route>
          </Routes>
        </div>
    </div>
  );
}

export default Home;
