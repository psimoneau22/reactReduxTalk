import React from "react"
import { useSelector } from "react-redux";
import ListItem from './ListItem';
import Error from "../../shared/components/Error";
import Loading from "../../shared/components/Loading";

export default function List() {
    const films = useSelector(state => state.films.list.data);
    const loading = useSelector(state => state.films.list.loading);
    const error = useSelector(state => state.films.list.error);

    if(error) return <Error message={error} />
    if(loading) return <Loading />

    return (
        <ul>
            { films.map(film => <ListItem key={film.url} film={film} /> )}
        </ul>
    )
}