import React from "react";
import Child from "./Child";

export default function Step12() {
    console.log('Root', Date.now())

    return (
        <div>
            <div>Root:</div>

            <br/>

            <Child
                name="Characters"
                url="https://swapi.dev/api/people"
                renderItems={(items, loading) => items.map(item => (
                    <div key={item.name}>{item.name}</div>
                ))} />

            <br/>

            <Child
                name="Starships"
                url="https://swapi.dev/api/starships"
                renderItems={(items, loading) => (
                    loading
                        ? <div>...Loading Message</div>
                        : (
                            <ul>
                                {items.map(item => (
                                    <li key={item.name}>{item.name}</li>
                                ))}
                            </ul>
                        )
                )} />

            <br/>

            <Child
                name="Films"
                url="https://swapi.dev/api/films"
                renderItems={(items, loading) => (
                    loading
                        ? <div>...Loading</div>
                        : (
                            <ol>
                                {items.map(item => (
                                    <li key={item.title}>{item.title}</li>
                                ))}
                            </ol>
                        )
                )} />
        </div>
    )
}