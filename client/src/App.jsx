import { Outlet } from "react-router-dom";
import CheckAuth from "./components/common/check-auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";
import { Skeleton } from "./components/ui/skeleton";

const App = () => {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-150 h-150 bg-black" />;

  console.log(isLoading, user);

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
