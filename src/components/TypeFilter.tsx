type TypeFilterProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function TypeFilter({
  options,
  value,
  onChange,
}: TypeFilterProps) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="animal-type">Type d’animal</label>
      <select
        id="animal-type"
        name="animalType"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-neutral-300 rounded w-full mt-1 p-0.5"
      >
        <option value="" label="Tous">
          Types
        </option>

        {options.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
