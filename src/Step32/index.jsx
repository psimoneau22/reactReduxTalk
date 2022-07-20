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
                field="name"
            />

            <br/>

            <Child
                name="Starships"
                url="https://swapi.dev/api/starships"
                field="name"
            />

            <br/>

            <Child
                name="Films"
                url="https://swapi.dev/api/films"
                field="title"
            />
        </div>
    )
}