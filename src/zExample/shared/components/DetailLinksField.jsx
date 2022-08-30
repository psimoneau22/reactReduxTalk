import React from "react";
import { useDispatch } from "react-redux";
import { changeTab } from "../../shared/reducer";

const getTab = field => {
    switch(field) {
        case 'characters': return 'people';
        default: return field;
    }
}
export default function DetailLinksField({ name, value }) {
    const dispatch = useDispatch();
    const handleSubItemClick = field => e => {
        e.preventDefault()
        dispatch(changeTab(getTab(field)))
    }

    return (
        <li key={name}>{name}:
            <ul>
                {value.map(subItem => (
                    <li key={subItem}><a href="" onClick={handleSubItemClick(name)}>{subItem}</a></li>
                ))}
            </ul>
        </li>
    )
}