import "./Select.scss";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  initialValue?: string;
  handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  allOption?: string;
};

export const Select = ({
  options = [],
  initialValue = "",
  handleChange = () => {},
  value = "",
  allOption = "",
}: SelectProps) => (
  <div className="select">
    <select onChange={handleChange} value={value}>
      {initialValue && <option value="defaultValue">{initialValue}</option>}
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
      {allOption && <option value="all">{allOption}</option>}
    </select>
  </div>
);
