import React from "react";
import DetailField from "../../shared/components/DetailField";
import DetailLinksField from "../../shared/components/DetailLinksField";

const subLists = ["films", "species", "vehicles", "starships"]
const ignoreFields = [...subLists, "homeworld", "url"]

export default function DetailFields({ details }) {
    return (
        <ul>
            { Object
                .keys(details)
                .filter(field => !ignoreFields.includes(field))
                .map(field => (
                    <DetailField key={field} name={field} value={details[field]} />
                ))}

                <DetailField name="homeworld" value={details.homeworld} />

            { subLists.map(field => (
                <DetailLinksField key={field} name={field} value={details[field]} />
            ))}
        </ul>
    )
}