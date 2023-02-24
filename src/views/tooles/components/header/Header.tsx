import "./Header.scss";

interface HeaderProps {
  setToogle: React.Dispatch<React.SetStateAction<boolean>>;
  toogle: boolean;
}

export const Header = ({ setToogle, toogle }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__description">
        {!toogle ? (
          <i
            className="fa-solid fa-bars header__icon"
            onClick={() => setToogle(!toogle)}
          />
        ) : (
          ""
        )}
        <img src={"img/logo.png"} className="header__logo" />
        <p className="header__description_text">Gestión de mi plan</p>
      </div>
      <div className="header__container">
        <i className="fa-solid fa-magnifying-glass header__notification " />
        <div className="header__notification">
          <div className="header__point" />
          <i className="fa-regular fa-bell header__size" />
        </div>
        <div className="header__user">
          <div className="header__col">
            <p className="header__user_name">Jason Doe</p>
            <p className="header__user_rol">Rol</p>
          </div>
          <img
            src={"img/profile.jfif"}
            alt="logo"
            className="header__user_img"
          />
        </div>
      </div>
    </header>
  );
};
