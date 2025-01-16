import { FC } from "react"
import { ICustomBtnProps } from "./CustomBtn.types"

export const CustomBtn: FC<ICustomBtnProps> = (props) => {

    const {
        children,
        isRemoving,
        handleRemove
    } = props

    return (
        <button
            disabled={isRemoving}
            className='bg-gray-200 px-2 py-1 cursor-pointer disabled:cursor-not-allowed'
            onClick={handleRemove}
        >
            {children}
        </button>
    )
}
