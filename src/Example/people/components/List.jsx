import React from "react"
import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import Error from "../../shared/components/Error";
import Loading from "../../shared/components/Loading";

export default function List() {
    const people = useSelector(state => state.people.list.data);
    const loading = useSelector(state => state.people.list.loading);
    const error = useSelector(state => state.people.list.error);

    if(error) return <Error message={error} />
    if(loading) return <Loading />

    return (
        <ul>
            { people.map(person => <ListItem key={person.url} person={person} /> )}
        </ul>
    )
}