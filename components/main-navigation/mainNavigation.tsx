import Link from "next/link";
import classes from "./main-navigation.module.css";
import { useContext } from "react";
import LoginContext from "@/context/LoginContext";
import Logo from "../Logo/Logo";

function MainNavigation() {
  const loginState = useContext(LoginContext) as any;

  function logOut() {
    loginState.setLoginContext(false);
  }

  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <div className="flex items-center space-x-14 p-20">
            <li className="mx-8">
              <Link href="/edit">Edit</Link>
            </li>
            <li className="mx-8">
              <Link href="/dictionary">Dictionary</Link>
            </li>
            <li className="mx-8">
              <Link href="/contact">Contact</Link>
            </li>
          </div>
          <div className="flex items-center space-x-14 p-20">
            {loginState.loginContext ? (
              <>
                <li className="mx-8">
                  <Link href="/admin">Admin</Link>
                </li>
                <li className="mx-8">
                  <Link href="/profile">Profile</Link>
                </li>
                <li className="mx-8">
                  <Link href="/" onClick={logOut}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link href="/auth">Login</Link>
              </li>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
