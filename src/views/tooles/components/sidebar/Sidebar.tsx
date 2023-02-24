import { Button } from "../button";
import { NAV_ITEMS } from ".";
import "./Sidebar.scss";

interface SidebarProps {
  setToogle: React.Dispatch<React.SetStateAction<boolean>>;
  toogle: boolean;
}

export const Sidebar = ({ setToogle, toogle }: SidebarProps) => {
  return (
    <aside className={toogle ? "sidebar" : "sidebar__close"}>
      <div>
        <div className="sidebar__user">
          <i
            className="fa-solid fa-square-xmark sidebar__user-icon"
            onClick={() => setToogle(!toogle)}
          />
          <h3 className="sidebar__user_title">Jason Doe</h3>
          <p className="sidebar__user_text">jason-180@mailserver.com</p>
          <img
            src={"img/profile.jfif"}
            alt="logo"
            className="sidebar__user_img"
          />
        </div>
        <h3 className="sidebar__menu_title">MENÚ</h3>
        <nav className="sidebar__menu">
          {NAV_ITEMS.map(({ label, icon, active }, index) => (
            <div key={index}>
              {active ? (
                <div className="sidebar__alert">
                  <p>Recuerda configurar este servicio</p>
                </div>
              ) : (
                ""
              )}
              <div
                className={`sidebar__item ${
                  active ? `sidebar__item_active` : ""
                }`}
              >
                <p key={label}>
                  <i className={`${icon} sidebar__icon`} />
                  <span className="absolute left-14 w-max">{label}</span>
                </p>
              </div>
            </div>
          ))}
        </nav>

        <div className="sidebar__storage">
          <i className="fa-solid fa-cloud" />
          <p className="sidebar__storage_text">Almacenamiento</p>
        </div>
        <div className="sidebar__progressbar">
          <div className="sidebar__progressbar_content"></div>
        </div>
        <p className="sidebar__progressbar_info">0.5 GB de 5 GB utilizado(s)</p>
        <Button text="Actualizar plan" classButton="sidebar__button" />
      </div>
      <div className="sidebar__cont">
        <div className="sidebar__cont_help">
          <i className="fa-regular fa-circle-question" />
          <p>Recursos de ayuda</p>
        </div>
        <div className="sidebar__tooles">
          <p className="sidebar__tooles_text"> powered by</p>
          <p className="sidebar__tooles_title"> TOOLES</p>
          <i className="fa-regular fa-copyright"></i>
        </div>
      </div>
    </aside>
  );
};
