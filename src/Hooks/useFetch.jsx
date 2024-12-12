import { useEffect, useState } from "react";
const useFetch = (endPoint) => {
    const [data, setData] = useState([]);
    useEffect(() => {
            fetch(endPoint)
    .then((res) => res.json())
    .then((data) => setData(data))
    }, [endPoint]);
    return data;
};
export default useFetch;