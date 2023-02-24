import { Checkbox } from "./components/checkbox";
import { Table } from "./components/table";

export const Tooles = () => {
  return (
    <div className="tooles">
      <div className="tooles__information">
        <div className="tooles__date">
          <p>Mie 27 jul, 9:43 am</p>
        </div>
        <div className="tooles__greeting">
          <h2 className="tooles__greeting-title">¡Hola Jason!</h2>
          <p className="tooles__greeting-text">
            Actualiza tu plan vigpro ára obtener mejores beneficios{" "}
          </p>
          <div className="tooles__expires">
            <span className="tooles__description">
              Plan premium - Este plan vence en 364 días
            </span>
            <div className="tooles__renewal">
              <p className="tooles__renewal-bold">Renovación automática</p>
              <Checkbox />
              <p className="tooles__renewal-light">Renovación manual</p>
            </div>
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
};
