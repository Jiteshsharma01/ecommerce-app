import {useEffect, useState} from "react";
import axios from "axios";

export default function useInfiniteScroll(limit, skip) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(false);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel;
        axios({
            method: 'GET',
            url: 'https://dummyjson.com/products',
            params: { limit: limit, skip: skip },
            cancelToken: new axios.CancelToken(c => cancel = c )
        }).then(res => {
            setProductList(prevProducts => {
                return [...new Set([...prevProducts, ...res.data.products])]
            })
            setHasMore(res.data.products.length > 0)
            setLoading(false);
        }).catch(e => {
            if (axios.isCancel(e)) return;
            setError(true)
        })
        return () => cancel()
    }, [limit, skip])
    return { loading, error, hasMore, productList };
}