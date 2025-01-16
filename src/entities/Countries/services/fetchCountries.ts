import { COUNTRIES_API } from "@/shared/consts";
import { ICountriesResponce } from "../types";

export const fetchCountries = async (): Promise<ICountriesResponce[]> => {
    const res = await fetch(COUNTRIES_API);
    const data = await res.json()
    return data.map((item: ICountriesResponce) => {
        return {
            ...item,
            flag_url: item.flag_url?.startsWith('//') ? `https:${item.flag_url}` : item.flag_url // исправляем URL
        }
    })
};