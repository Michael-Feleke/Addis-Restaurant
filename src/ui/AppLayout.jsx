import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto,1fr,auto]">
      {isLoading && <Loader />}
      <Header className="mb-96" />
      {/* <div className="overflow-scroll ">
        <main className="flex items-center justify-center h-full">
          <Outlet />
        </main>
      </div> */}
    </div>
  );
}

export default AppLayout;
