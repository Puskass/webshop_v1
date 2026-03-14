import { Outlet } from "react-router-dom";
import CheckAuth from "./components/common/check-auth";
import { useSelector } from "react-redux";

const App = () => {

  const {user, isAuthenticated} = useSelector(state => state.auth)
  return (
    <CheckAuth isAuthenticated={isAuthenticated} user={user}>
      <div className="flex flex-col overflow-hidden bg-white">
        {/* <h1>Header component</h1> */}

        {/* Outlet služi kao placeholder za komponente definirane u routeru */}
        <main>
          <Outlet />
        </main>

        {/* <h1>Footer component</h1> */}
      </div>
    </CheckAuth>
  );
};

export default App;
