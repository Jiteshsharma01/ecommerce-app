import React, {useState, useEffect, useRef, useCallback} from 'react';
import { useLocation } from "react-router-dom";
import useInfiniteScroll from '../../utils/useInfiniteScroll';
import ProductCard from '../ProductCard/ProductCard';

const MainLayout = () => {
    const [limit, setLimit] = useState(10);
    const [skip, setSkip] = useState(0);

    const { loading, error, hasMore, productList } = useInfiniteScroll(limit, skip);

    const observer = useRef();
    const lastProductElementRef = useCallback(node => {
        if (loading) return;
        if (observer?.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore){
                setSkip(prevSkip => prevSkip + 10);
            }
        })
        if (node) observer.current.observe(node);
    }, [loading, hasMore])
  
    return (
        <>
            <div className='product-list'>
                {productList?.map((product, index) => {
                    if(productList.length === index +1){
                        return <ProductCard ref={lastProductElementRef} {...product} key={product.id} />
                    } else {
                        return <ProductCard {...product} key={product.id} />
                    }

                })}
            </div>
            {loading && <div className="loader-container bottom">
                <div className="spinner"></div>
            </div>}
            <div>{error && 'Error'}</div>
        </>
    )
}

export default MainLayout;