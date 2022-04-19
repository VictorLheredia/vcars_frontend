import { Outlet } from "react-router-dom";
import Header from "./layouts/Header";

export default function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}
