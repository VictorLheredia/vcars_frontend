import { Outlet } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

export default function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
