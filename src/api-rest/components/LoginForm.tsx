import { useState, FC, SetStateAction, Dispatch } from "react";
import { toast } from "react-toastify";
import axiosClient from "../../../config/axios";
import { CURRENT_USER } from "../../../constants/user";
import { ICredentials, OnSubmitEvent } from ".";

export const LoginForm: FC<{
  setSession: Dispatch<SetStateAction<boolean>>;
}> = ({ setSession }) => {
  const [credentials, setCredentials] = useState<ICredentials>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const onSubmit = async (e: OnSubmitEvent) => {
    e.preventDefault();

    try {
      const { data } = await axiosClient.post("/auth/login", credentials);
      if (data?.token) {
        setSession(true);
        localStorage.setItem(CURRENT_USER, data.user.name);
        setError("");
        setCredentials({ email: "", password: "" });
        toast.success(`Bienvenido ${data.user.name}`);
      }
    } catch (error: any) {
      setError(error?.response?.data?.msg);
    }
  };

  return (
    <div className="api-rest__form-wrapper">
      <div className="api-rest__form-content active-form" id="login">
        <form action="#" method="POST" autoComplete="off" onSubmit={onSubmit}>
          <div className="api-rest__form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="correo@correo.com"
              required
              onChange={({ target }) =>
                setCredentials({ ...credentials, [target.name]: target.value })
              }
              value={credentials.email}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="*******"
              required
              onChange={({ target }) =>
                setCredentials({ ...credentials, [target.name]: target.value })
              }
              value={credentials.password}
            />
            <div className="api-rest__form-check flex">
              <input className="pointer" type="checkbox" id="checkBox" />
              <span>Recordarme</span>
            </div>
            <a href="#" className="api-rest__reset-password">
              ¿Olvidaste la contraseña?
            </a>
            {error && <span className="api-rest__error">{error}.</span>}
            <button className="api-rest__button" type="submit">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
