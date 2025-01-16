import { ReactNode } from "react";

export interface ICustomBtnProps {
    children: ReactNode
    isRemoving: boolean
    handleRemove: () => void
}