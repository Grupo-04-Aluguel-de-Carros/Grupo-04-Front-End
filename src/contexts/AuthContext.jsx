import { createContext, useState, useEffect } from "react";

import { api } from "../services/api";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { HttpStatusCode } from "axios";

import {
  storageUserSave,
  storageUserGet,
  storageUserDelete,
} from "../storage/storageUser";

import {
  storageAuthTokenGet,
  storageAuthTokenSave,
  storageAuthTokenRemove,
} from "../storage/storageAuthToken";
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [isLodingUserStorageData, setisLoadingUserStorageData] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  async function userAndTokenUpdate(userData, token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setUser(userData);
  }

  async function storageUserAndTokenSave(userData, token) {
    try {
      setisLoadingUserStorageData(true);

      await storageUserSave(userData);
      await storageAuthTokenSave(token.accessToken);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoadingUserStorageData(false);
    }
  }

  async function signIn(email, password) {
    try {
      const { data } = await api.post("/auth/login", { email, password });

      console.log(data)
      
      const local = location.pathname;

      console.log(local);

      if (local !== "/signin" && local !== "/signup") {
        console.log("ok")
      } else {
        navigate("/");
      }
      
      toast.success("Seja bem vindo")

      if (data.user && data.token) {
        await storageUserAndTokenSave(data.user, data.token);
        userAndTokenUpdate(data.user, data.token);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    } finally {
      setisLoadingUserStorageData(false);
    }
  }

  async function signOut() {
    try {
      setisLoadingUserStorageData(true);
      setUser();
      await storageUserDelete();
      await storageAuthTokenRemove();
    } catch (error) {
      console.log(error);
    } finally {
      setisLoadingUserStorageData(false);
    }
  }

  async function createUser(data) {

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
      toast.success("Cadastro realizado com sucesso");
      signIn(data.email, data.password);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }

  async function updateUserProfile(userUpdated) {
    setUser(userUpdated);
    storageUserSave(userUpdated);
  }

  async function loadUserData() {
    try {
      setisLoadingUserStorageData(true);

      const userLogged = await storageUserGet();
      const token = await storageAuthTokenGet();

      if (token && userLogged) {
        userAndTokenUpdate(userLogged, token);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setisLoadingUserStorageData(false);
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        createUser,
        updateUserProfile,
        isLodingUserStorageData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
