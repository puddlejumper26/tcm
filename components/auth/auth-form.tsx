import { useContext, useRef, useState } from "react";
import classes from "./auth-form.module.css";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import LoginContext from "@/context/LoginContext";

async function createUser(
  name: string | undefined,
  email: string | undefined,
  password: string | undefined
): Promise<any> {
  console.log("AuthForm - createUser");
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  if (!response.ok) {
    console.log("Error creating user in AuthForm -", response);
    throw new Error(data.message);
  }
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const loginState = useContext(LoginContext) as any;

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const registerNameRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;
    const enteredName = registerNameRef.current?.value;

    if (isLogin) {
      // [...nextauth].js 中的 credentials
      // 下面的object会被作为Argument传入[...nextauth].js中的authorize

      const result = await signIn("credentials", {
        redirect: false,
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
      });
      console.log("AuthForm result - ", result);

      if (!result?.error) {
        loginState.setLoginContext(isLogin);
        router.replace("/profile");
      }
    } else {
      console.log(11111, isLogin);
      loginState.setLoginContext(isLogin);

      try {
        const result = await createUser(
          enteredName,
          enteredEmail,
          enteredPassword
        );
      } catch (error) {
        console.log("AuthForm Login Error -", error);
      }
    }
  }

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          {!isLogin && (
            <>
              <label htmlFor="name">Your Name</label>
              <input
                required
                type="name"
                id="register-name"
                ref={registerNameRef}
              />
            </>
          )}
          <label htmlFor="email">Your Email</label>
          <input required type="email" id="login-email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="login-password"
            required
            minLength={4}
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          // TODO: redirect to Profile page
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}
export default AuthForm;
