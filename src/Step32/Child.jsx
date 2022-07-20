import React, { useEffect, useState } from "react";

export default function Child({ name, url, field }) {
    console.log(name, Date.now())

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setItems(data.results))
    }, [])

    return (
        <div>
            <div>{name}:</div>
            { items.length
                ? items.map(item => (
                    <div key={item[field]}>{item[field]}</div>
                ))
                : <div>...Loading</div>
            }
        </div>
    )
};
