import { useState } from "react";
import { DIFFERENT_PASSWORDS } from "../../constants/error";
import axiosClient from "../../config/axios";
import {
  defaultRegisterData,
  OnChangeEvent,
  OnSubmitEvent,
  IRegisterData,
} from ".";
import { EMAIL_CONFIRMATION } from "../../constants/user";

export const RegisterForm = () => {
  const [user, setUser] = useState<IRegisterData>(defaultRegisterData);
  const [error, setError] = useState<boolean>(false);
  const [successfulRegistration, setSuccessfulRegistration] =
    useState<boolean>(false);

  const handleChange = ({ target }: OnChangeEvent) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const onSubmit = async (e: OnSubmitEvent) => {
    e.preventDefault();
    if (user.password !== user.passwordConfirmed) return setError(true);
    setError(false);

    const { data } = await axiosClient.post("/auth/register", user);

    if (data?.success) {
      setSuccessfulRegistration(true);
      setUser(defaultRegisterData);
    }
    setTimeout(() => {
      setSuccessfulRegistration(false);
    }, 2000);
  };

  return (
    <div className="api-rest__form-wrapper">
      <div className="api-rest__form-content active-form" id="login">
        <form action="#" method="POST" autoComplete="off" onSubmit={onSubmit}>
          {successfulRegistration && (
            <p className="api-rest__message text-white">{EMAIL_CONFIRMATION}</p>
          )}
          <div className="api-rest__form-group">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              name="name"
              placeholder="Homero"
              required
              onChange={handleChange}
              value={user.name}
            />
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="correo@correo.com"
              required
              onChange={handleChange}
              value={user.email}
            />
            <label htmlFor="age">Edad</label>
            <input
              type="number"
              id="age"
              placeholder="xx años"
              required
              name="age"
              onChange={handleChange}
              value={user.age || ""}
            />
            <label htmlFor="birthDate">Fecha de nacimiento</label>
            <input type="date" id="birthDate" placeholder="xx años" required />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="*******"
              required
              onChange={handleChange}
              value={user.password}
            />
            <label htmlFor="passwordConfirmed">Repetir contraseña</label>
            <input
              type="password"
              id="passwordConfirmed"
              name="passwordConfirmed"
              placeholder="*******"
              required
              onChange={handleChange}
              value={user.passwordConfirmed}
            />
            {error && (
              <span className="api-rest__error">{DIFFERENT_PASSWORDS}</span>
            )}
            <button className="api-rest__button" type="submit">
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
