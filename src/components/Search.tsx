type SearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function Search({ search, setSearch }: SearchProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    console.log(event.target.value, "is now researched in animals");
  }

  return (
    <div>
      <h2>Localisation</h2>
      <input
        type="text"
        placeholder="Votre Ville"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}
