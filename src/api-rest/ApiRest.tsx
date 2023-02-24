import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { LoginForm, RegisterForm } from "./components";
import { CURRENT_USER } from "../../constants/user";
import axiosClient from "../../config/axios";
import { Form } from ".";
import "./ApiRest.scss";

export const ApiRest = () => {
  const { Login, Register } = Form;

  useEffect(() => {
    validateUser();
  }, []);

  const [currentForm, setCurrentForm] = useState(Login);
  const [session, setSession] = useState<boolean>(false);

  const getButtonClass = (form: string) => {
    return form === currentForm ? "active-tab" : "";
  };

  const validateUser = async () => {
    const token = window.location?.search.split("?token=")[1];
    if (token) {
      try {
        const { data } = await axiosClient.get(`/auth/confirm-user/${token}`);
        localStorage.setItem(CURRENT_USER, data.user.name);
        toast.success("Usuario confirmado correctamente!!");
        setSession(true);
      } catch (error) {
        toast.success("Token inválido");
        setSession(false);
      }
    }
  };

  const closeSession = () => {
    setSession(!session);
    localStorage.removeItem(CURRENT_USER);
  };

  return (
    <div className="api-rest">
      {session ? (
        <div className="api-rest__user-panel">
          <p className="api-rest__user-message text-white">
            Bienvenido {localStorage[CURRENT_USER] || "Jefe"}
          </p>
          <button
            className="api-rest__log-out flex items-center"
            onClick={closeSession}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 text-white api-rest__close-session"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
            <p>Cerrar sesión</p>
          </button>
        </div>
      ) : (
        <div className="api-rest__content relative">
          <div className="api-rest__tabs w-full absolute flex justify-center">
            <button
              className={`api-rest__nav-tab ${getButtonClass(Login)}`}
              data-toggle="login"
              onClick={() => setCurrentForm(Login)}
            >
              Iniciar sesión
            </button>
            <button
              className={`api-rest__nav-tab ${getButtonClass(Register)}`}
              data-toggle="register"
              onClick={() => setCurrentForm(Register)}
            >
              Registrarse
            </button>
          </div>
          {currentForm === Login ? (
            <LoginForm setSession={setSession} />
          ) : (
            <RegisterForm />
          )}
        </div>
      )}
    </div>
  );
};

// import { useState, useEffect } from "react";
// import { LoginForm, RegisterForm } from "./components";
// import { CURRENT_USER } from "../../constants/user";
// import { Form } from ".";
// import "./ApiRest.scss";

// export const ApiRest = () => {
//   const { Login, Register } = Form;

//   useEffect(() => {
//     console.log("acaa", window.location?.search.split("?token=")[1]);
//   }, []);

//   const [currentForm, setCurrentForm] = useState(Login);
//   const [session, setSession] = useState<boolean>(false);

//   const getButtonClass = (form: string) => {
//     return form === currentForm ? "active-tab" : "";
//   };

//   const validateUser = async () => {
//     const { data } = await axiosClient.post("/auth/login", credentials);
//   };

//   const closeSession = () => {
//     setSession(!session);
//     localStorage.removeItem(CURRENT_USER);
//   };

//   return (
//     <div className="api-rest">
//       {session ? (
//         <div className="api-rest__user-panel">
//           <p className="api-rest__user-message text-white">
//             Bienvenido {localStorage[CURRENT_USER] || "Jefe"}
//           </p>
//           <button
//             className="api-rest__log-out flex items-center"
//             onClick={closeSession}
//           >
//             <svg
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 text-white api-rest__close-session"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
//               />
//             </svg>
//             <p>Cerrar sesión</p>
//           </button>
//         </div>
//       ) : (
//         <div className="api-rest__content relative">
//           <div className="api-rest__tabs w-full absolute flex justify-center">
//             <button
//               className={`api-rest__nav-tab ${getButtonClass(Login)}`}
//               data-toggle="login"
//               onClick={() => setCurrentForm(Login)}
//             >
//               Iniciar sesión
//             </button>
//             <button
//               className={`api-rest__nav-tab ${getButtonClass(Register)}`}
//               data-toggle="register"
//               onClick={() => setCurrentForm(Register)}
//             >
//               Registrarse
//             </button>
//           </div>
//           {currentForm === Login ? (
//             <LoginForm setSession={setSession} />
//           ) : (
//             <RegisterForm />
//           )}
//         </div>
//       )}
//     </div>
//   );
// };
