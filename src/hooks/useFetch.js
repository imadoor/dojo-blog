import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [ data, setData ] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        console.log('use effect ran');
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error(`Data ${res.statusText}`)
                }
                return  res.json();
            })
            .then(data => {
                setData(data);
                setPending(false);
                setError(null);
            })
            .catch( err => {
                setError(err.message)
                setPending(false)
                console.log(err);
            })
    }, [url]);
    return { data, isPending, error };
};
export default useFetch;