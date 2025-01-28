import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { createContext } from 'react'
import { ProductContextProps, CardProps } from '../interfaces/interfaces';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';




export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext



export const ProductCard = ({ children,product }: CardProps) => {
    const {count, increaseBy} = useProduct()

  return (
    <Provider value={{
            count,
            increaseBy,
            product
        }}>
    <div className={styles.productCard}>
        {children}
    </div>
        </Provider>
  )
}

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;

export default ProductCard
