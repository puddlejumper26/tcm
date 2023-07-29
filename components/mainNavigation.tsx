import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigation.module.css";
import { useContext } from "react";
import LoginContext from "@/context/LoginContext";

function MainNavigation() {
  const context = useContext(LoginContext) as any;

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
          {context.loginContext ? (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          ) : (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
