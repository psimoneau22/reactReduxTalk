import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { filmSelected } from "../actions";

export default function ListItem({ film: { title, url } }) {
    const dispatch = useDispatch()
    const isActive = useSelector(state => state.films.selectedDetail === url)

    const handleClick = () => dispatch(filmSelected(url))

    return (
        <li onClick={handleClick} className={`list-item${isActive ? ' --active' : ''}`}>
            {title}
        </li>
    )
}