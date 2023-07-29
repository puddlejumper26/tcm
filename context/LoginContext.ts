import { Dispatch, SetStateAction, createContext } from "react";

type loginContextType = {
  loginContext: boolean;
  setLoginContext: Dispatch<SetStateAction<boolean>>;
};

const LoginContext = createContext<loginContextType>({
  loginContext: false,
  setLoginContext: () => {},
});

export default LoginContext;
