import React, { useState, useEffect } from "react"

export default function withAsyncValue(WrappedComponent, url, delay = 1000) {
    return function WithAsyncValueWrapper(props) {

        const [value, setValue] = useState(null)

        useEffect(() => {
            setTimeout(() => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => setValue(data))
            }, delay);
        }, [])

        return <WrappedComponent value={value} {...props } />
    }
}