import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getPerson } from "../actions"
import Error from "../../shared/components/Error";
import Loading from "../../shared/components/Loading";
import DetailFields from "./DetailFields";

export default function Details() {
    const dispatch = useDispatch()
    const detailUrl = useSelector(state => state.people.selectedDetail);
    const { data: details, loading, error } = useSelector(state => state.people.detail);

    useEffect(() => {
        if(detailUrl) {
            dispatch(getPerson(detailUrl));
        }
    }, [detailUrl])

    if(error) return <Error message={error} />
    if(loading) return <Loading />
    if(details) return <DetailFields details={details} />
}
