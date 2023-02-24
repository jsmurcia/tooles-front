import { Card } from "./components/card";
import "./Swapi.scss";
import { swapiApi } from "../../api/swapi";
import { useEffect, useState } from "react";
import { FILTER_OPTIONS, Person } from ".";
import { Select } from "./components/select";
import { Button } from "../tooles/components/button";

type Character = {
  name: string;
};

export const Swapi = () => {
  const [characters, setCharacters] = useState<Person[]>();
  const [listRender, setListRender] = useState<Character[]>([]);

  const getCharacters = async () => {
    const { data } = await swapiApi.get("people/");
    if (data) {
      setCharacters(data.results);
      setListRender(data.results);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const handelSearch = ({ target }: { target: HTMLInputElement }) => {
    const filteredList = characters?.filter((item) =>
      item.name.toLocaleLowerCase().includes(target.value)
    );
    setListRender(filteredList || []);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filteredList = characters?.filter(
      (item) =>
        item.gender.toLocaleLowerCase() === e.target.value.toLocaleLowerCase()
    );
    setListRender(filteredList || []);
  };

  const clearFilters = () => {
    getCharacters();
  };

  return (
    <div className="swapi">
      <img alt="logo" src="img/star-wars-4.svg " className="swapi__title" />
      <div className="swapi__filters">
        <div className="swapi__sarch">
          <input
            className="swapi__sarch-input"
            placeholder="Search name"
            onChange={(e) => handelSearch(e)}
          />
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <Select
          options={FILTER_OPTIONS}
          initialValue="filter"
          handleChange={(e) => handleChange(e)}
        />
        <Button
          text="Clear filters"
          onClick={clearFilters}
          classButton="swapi__button"
        />
      </div>
      <div className="swapi__container">
        {characters &&
          listRender.map((item: any, index) => (
            <Card person={item} key={index} />
          ))}
      </div>
    </div>
  );
};
