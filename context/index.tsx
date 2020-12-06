import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { User } from "../types";

type AmalgamyContext = {
  user?: User;
  currChatReceiver?: ChatReceiver;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  setChatReceiver: Dispatch<SetStateAction<ChatReceiver | undefined>>;
};

type ChatReceiver = {
  email: string;
  firstName: string;
  lastName: string;
};

type Props = {
  children: React.ReactNode;
};

export const defaultContext: AmalgamyContext = {
  user: undefined,
  currChatReceiver: undefined,
  setUser: () => void 0,
  setChatReceiver: () => void 0,
};

export const AppContext = createContext(defaultContext);

export const AppContextProvider = (props: Props) => {
  const [currChatReceiver, setChatReceiver] = useState<
    ChatReceiver | undefined
  >();
  const [user, setUser] = useState<User | undefined>();

  return (
    <AppContext.Provider
      value={{
        ...defaultContext,
        currChatReceiver,
        setChatReceiver,
        user,
        setUser,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
