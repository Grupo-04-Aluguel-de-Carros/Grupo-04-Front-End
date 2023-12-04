import { createContext, useState } from "react";

import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HttpStatusCode } from "axios";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  const navigate = useNavigate();

  async function signIn(email, password) {
    await api
      .post("/auth/login", { email, password })
      .then((data) => {
        localStorage.setItem(
          "@rentCarUserJWT",
          JSON.stringify(data.data.accessToken)
        );

        api.get("/user").then((data) => {
          const arrayUsers = data.data.data;

          arrayUsers.map((userData) => {
            {
              userData.email === email
                ? (setUser(userData),
                  localStorage.setItem(
                    "@rentCarUser",
                    JSON.stringify(userData)
                  ))
                : "";
              navigate(0);
              navigate("/");
            }
          });
        });
      })
      .catch((error) => {
        if (error.response.status === 401) {
          toast.error(error.response.data.error, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      });
  }

  async function signOut() {
    localStorage.removeItem("@rentCarUser");
    localStorage.removeItem("@rentCarUserJWT");
    navigate(0);
    navigate("/");
  }

  async function createUser(data) {
    console.log(data);

    try {
      await api.post("/auth", {
        name: data.name,
        surname: data.surname,
        age: data.age,
        cpf: data.cpf,
        phoneNumber: data.phoneNumber,
        email: data.email,
        password: data.password,
      });

      signIn(data.email, data.password);
      
    } catch (error) {
      console.log(error);
      console.log("Deu erro aqui");
      toast.error(HttpStatusCode.InternalServerError);
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, createUser }}>
      {children}
    </AuthContext.Provider>
  );
}
