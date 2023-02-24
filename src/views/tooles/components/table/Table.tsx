import "./Table.scss";
import { Button } from "../button";
import { PACKAGES } from ".";

export const Table = () => {
  return (
    <div className="table">
      <div className="table__description">
        <p className="table__description-text">
          Seleccione la modalida de pago
        </p>
        <Button text="Anual" classButton="table__button_year" />
        <Button text="Mensual" classButton="table__button-mounth" />
      </div>
      <div className="table__information">
        <i className="fa-solid fa-circle-exclamation table__icon" />
        <p className="table__information-text">
          En el plan actual, uedes ver un resumen del consumo del tu plan. Si
          quieres ver una mejor visualizacion de tu plan te invitamos a ver{" "}
          <span>Dasboard</span>
        </p>
      </div>
      <div className="table__container">
        {PACKAGES.map((item, index) => (
          <div key={index} className="table__card">
            <div className="table__container-popular">
              <h3 className={item.stylesTitle}>{item.title}</h3>
              {item.id === 4 ? (
                <p className="table__card-popular">Más popular</p>
              ) : (
                ""
              )}
            </div>
            <p className="table__card-price">
              {item.price}{" "}
              <span className="table__card-span">
                {item.id === 1 ? "" : "COP mensual"}
              </span>
            </p>
            <p className="table__card-subtitle">{item.subtitle}</p>
            {item.id !== 1 ? (
              <button
                className={`table__button ${
                  item.id === 4 ? "table__button-active" : ""
                }`}
              >
                Seleccionar plan
              </button>
            ) : (
              <span className="table__span"></span>
            )}
            <p className="table__serveillace">{item.serveillance}</p>
            <p className="table__alert">{item.alert}</p>
            <p className="table__alert">{item.attendance}</p>
            <p className="table__alert">{item.authorizations}</p>
            <p className="table__alert">{item.user}</p>
            <p className="table__storage">{item.storage}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
