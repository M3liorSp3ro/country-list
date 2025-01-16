import { CustomBtn } from '@/shared/ui/CustomBtn/CustomBtn';
import { CustomImage } from '@/shared/ui/CustomImage/CustomImage';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { ICountryItemProps } from '../types';

export const CountryItem: FC<ICountryItemProps> = (props) => {

    const { country, onRemove } = props

    const [isRemoving, setIsRemoving] = useState(false);
    const [imageError, setImageError] = useState(false);
    const listItemRef = useRef<HTMLLIElement>(null);

    const handleRemove = useCallback(() => {
        setIsRemoving(true)
        setTimeout(() => {
            onRemove(country.name_ru);
        }, 300)
    }, [country.name_ru, onRemove]);

    const handleImageError = useCallback(() => {
        setImageError(true);
    }, []);

    useEffect(() => {
        if (isRemoving && listItemRef.current) {
            listItemRef.current.style.transform = 'translateX(100%)';
            listItemRef.current.style.opacity = '0';
            listItemRef.current.classList.add('list-item-removing')
        }
    }, [isRemoving])

    return (
        <li
            ref={listItemRef}
            className={
                `flex items-center border border-gray-300 p-3 mb-2 transition-all duration-300 ease-in-out ${isRemoving ? 'overflow-hidden' : ''}`
            }
        >
            <CustomImage
                flag_url={country.flag_url}
                name_ru={country.name_ru}
                imageError={imageError}
                handleImageError={handleImageError}
            />

            <span className='ml-3 flex-1'>
                {country.name_ru}
            </span>

            <CustomBtn
                isRemoving={isRemoving}
                handleRemove={handleRemove}
            >
                Удалить
            </CustomBtn>

        </li>
    );
};