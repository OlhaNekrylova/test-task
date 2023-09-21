import ProductCard from '../ProductCard/ProductCard';
import ProductCardStyled from '../ProductCardStyled/ProductCardStyled';
import styled from './ProductsList.module.css';

const ProducstList = () => {
    return (
        <>
            <div className={styled.productsList}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCardStyled />
            </div>
        </>
        
    );
};

export default ProducstList;