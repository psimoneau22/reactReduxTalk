import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getFilm } from "../actions"
import Error from "../../shared/components/Error";
import Loading from "../../shared/components/Loading";
import DetailFields from "./DetailFields";

export default function Details() {
    const dispatch = useDispatch()
    const detailUrl = useSelector(state => state.films.selectedDetail)
    const { data: details, loading, error } = useSelector(state => state.films.detail);

    useEffect(() => {
        if(detailUrl) {
            dispatch(getFilm(detailUrl));
        }
    }, [detailUrl])

    if(error) return <Error message={error} />
    if(loading) return <Loading />
    if(details) return <DetailFields details={details} />
}