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
    <>
      <h2>Type d'animal</h2>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded px-3 py-2"
      >
        <option value="">Tous les types</option>

        {options.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </>
  );
}
