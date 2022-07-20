import React, { useEffect, useState } from "react";

export default function Child({ name, url, renderItems }) {
    console.log(name, Date.now())

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setItems(data.results))
    }, [])

    const loading = items.length === 0;

    return (
        <div>
            <div>{name}:</div>
            { renderItems(items, loading) }
        </div>
    )
};
