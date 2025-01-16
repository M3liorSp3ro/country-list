import { ICountriesResponce } from "@/entities/Countries";

export interface ICountryItemProps {
    country: ICountriesResponce
    onRemove: (name: string) => void
}