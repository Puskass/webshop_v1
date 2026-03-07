import { Outlet } from "react-router-dom";
import CheckAuth from "./components/common/check-auth";

const App = () => {
  const isAuthenticated = false;
  const user = {
    name: 'Tarik',
    role: 'admin'
  };
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
