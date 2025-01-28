import exp from "constants"
import { ReactElement } from "react"

export interface CardProps{
    product: Product
    children?: ReactElement | ReactElement[]
}


export interface Product {
    id: number
    title: string
    img?: string
}

export interface ProductContextProps {
    count: number
    increaseBy: (value: number) => void
    product: Product
}
export interface ProductCardHocProps {
    ({ children, product }: CardProps): JSX.Element;
    Title: ({ title }: { title?: string }) => JSX.Element;
    Image: ({ img }: { img?: string }) => JSX.Element;
    Buttons: () => JSX.Element;
}