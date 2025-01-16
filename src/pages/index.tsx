import { fetchCountries, ICountriesResponce } from "@/entities/Countries";
import { CountryItem } from "@/features/CountryItem";
import { useCallback, useEffect, useState } from "react";

export default function Home() {

  const [countries, setCountries] = useState<ICountriesResponce[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCountries();
      setCountries(data)
    };
    loadData();
  }, []);

  const handleRemoveCountry = useCallback((name: string) => {
    setCountries(prevCountries => prevCountries.filter((country) => country.name_ru !== name));
  }, []);

  return (
    <div className='p-5 overflow-hidden'>
      <main className='max-w-2xl mx-auto'>
        <h1 className='text-2xl font-bold mb-5'>Список стран</h1>
        <ul className='list-none p-0'>
          {countries.map((country) => (
            <CountryItem key={country.name_ru} country={country} onRemove={handleRemoveCountry} />
          ))}
        </ul>
      </main>
    </div>
  );
}
