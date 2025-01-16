import Image from "next/image"
import { FC } from "react"
import { ICustomImageProps } from "./CustomImage.types"

export const CustomImage: FC<ICustomImageProps> = (props) => {

    const {
        flag_url,
        name_ru,
        imageError,
        handleImageError
    } = props

    if (imageError) {
        return (
            <span className="w-10 h-6 bg-gray-200 flex items-center justify-center">
                ?
            </span>
        )
    }

    return (
        <Image
            src={flag_url}
            alt={name_ru}
            width={40}
            height={25}
            onError={handleImageError}
        />

    )
}
