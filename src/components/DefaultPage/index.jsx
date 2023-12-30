import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/index";
import Footer from "../Footer/footer";

const DefaultPage = () => {
  const location = useLocation();
  return (
    <div>
      <Header />
      <Outlet />
      {location.pathname !== "/carrinho" && <Footer />}
    </div>
  );
};

export default DefaultPage;
