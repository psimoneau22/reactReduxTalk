import React from "react";
import DetailField from "../../shared/components/DetailField";
import DetailLinksField from "../../shared/components/DetailLinksField";

const subLists = ["characters", "planets", "species", "vehicles", "starships"]
const ignoreFields = [...subLists, "url" ]

export default function DetailFields({ details }) {
    return (
        <ul>
            { Object
                .keys(details)
                .filter(field => !ignoreFields.includes(field))
                .map(field => (
                    <DetailField key={field} name={field} value={details[field]} />
                ))}

            { subLists.map(field => (
                <DetailLinksField key={field} name={field} value={details[field]} />
            ))}
        </ul>
    )
}