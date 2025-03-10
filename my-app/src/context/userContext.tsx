"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id: number;
  name: string;
  age: number;
  address: string;
  country: string;
  price: number;
  language: string;
  model: string;
  lookingfor: string;
  preference: {
    age: string;
    smoking: string;
    Drinking: string;
    StudentOnly: string;
    Pets: string;
  };
  lifestyle: {
    eating: string;
    drinking: string;
    smoking: string;
    friend: string;
    walk: string;
  };
  character: string;
  avatar: string;
}

interface UserContextType {
  users: User[] | null;
  user: User | null;
  fetchUserById: (id: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.error("Lỗi API:", err);
      });
  }, []);

  const fetchUserById = (id: number) => {
    fetch(`http://localhost:5000/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      })
      .catch((err) => {
        console.error("Lỗi API:", err);
      });
  };

  return (
    <UserContext.Provider value={{ users, user, fetchUserById }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser phải được dùng trong UserProvider");
  }
  return context;
};
