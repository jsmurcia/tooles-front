export * from "./Swapi";

export interface Person {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: any[];
  starships: any[];
  url: string;
}

export const FILTER_OPTIONS = [
  {
    value: "female",
    label: "filter female",
  },
  {
    value: "male",
    label: "filter mean",
  },
  {
    value: "n/a",
    label: "filter machine",
  },
];
