import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

//contexts
import { SearchProvider } from "../contexts/SearchContext";
export default function DefaultLayout() {
  return (
    <>
      <SearchProvider>
        <Header />
        <Outlet />
        <Footer />
      </SearchProvider>
    </>
  );
}
