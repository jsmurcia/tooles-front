import { useNavigate } from "react-router-dom";
import { SECTIONS } from ".";
import "./Sections.scss";

export const Sections = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-center sections">
      {SECTIONS.map(({ text, route }) => (
        <button
          key={route}
          className="sections__button"
          data-before={text}
          onClick={() => navigate(route)}
        />
      ))}
    </section>
  );
};
