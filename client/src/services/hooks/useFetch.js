import { useState, useEffect } from 'react';

export default function useFetch(url) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data.results))
            .catch(err => setError(err))
            .finally(_ => setLoading(false))
    }, [url])

    return {
        data, loading, error
    }
}