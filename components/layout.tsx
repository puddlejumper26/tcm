import { Fragment, useState } from "react";
import MainNavigation from "./mainNavigation";
import LoginContext from "@/context/LoginContext";

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
