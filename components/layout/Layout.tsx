import { Fragment, useState } from "react";
import LoginContext from "@/context/LoginContext";
import MainNavigation from "../main-navigation/mainNavigation";

function Layout(props: any) {
  const [loginContext, setLoginContext] = useState(true);
  return (
    <Fragment>
      <LoginContext.Provider value={{ loginContext, setLoginContext }}>
        <MainNavigation />
        <main>{props.children}</main>
      </LoginContext.Provider>
    </Fragment>
  );
}

export default Layout;
