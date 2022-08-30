import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { personSelected } from "../actions";

export default function List({ person: { name, url } }) {
    const dispatch = useDispatch()
    const isActive = useSelector(state => state.people.selectedDetail === url)

    const handleClick = () => dispatch(personSelected(url))

    return (
        <li onClick={handleClick} className={`list-item${isActive ? ' --active' : ''}`}>
            {name}
        </li>
    )
}