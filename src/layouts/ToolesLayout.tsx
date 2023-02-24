import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../views/tooles/components/sidebar";
import { Header } from "../views/tooles/components/header";

export const ToolesLayout = () => {
  const [toogle, setToogle] = useState(true);
  return (
    <div className="layout">
      <Sidebar setToogle={setToogle} toogle={toogle} />
      <div className={!toogle ? "layout__show" : "layout__hidden"}>
        <Header setToogle={setToogle} toogle={toogle} />
        <Outlet />
      </div>
    </div>
  );
};
