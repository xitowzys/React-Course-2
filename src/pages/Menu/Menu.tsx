import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import { useEffect, useState } from 'react';

export function Menu() {

    const [products, setProducts] = useState<Product[]>([]);

    const getMenu = async () => {

        try {
            const res = await fetch(`${PREFIX}/products`);

            if (!res.ok) {
                return;
            }
    
            const data: Product[] = await res.json() as Product[];
    
            setProducts(data);
        } catch(e) {
            console.error(e);
            return;
        }
    };

    useEffect(() => {
        getMenu();
    }, []);

    return (
        <>
            <div className={styles['head']}>
                <Headling>Меню</Headling>
                <Search placeholder='Введите блюдо или состав' />
            </div>

            <div>

                {products.map(p => (
                    <ProductCard
                        key={p.id}
                        id={p.id}
                        title={p.name}
                        description={p.ingredients.join(', ')}
                        rating={p.rating}
                        price={p.price}
                        image={p.image}
                    />
                ))}
            </div>
        </>
    );
}