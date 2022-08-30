import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import List from './components/List'
import Details from './components/Details'
import { getPeople } from './actions'
import Pager from '../shared/components/Pager'

export default function People() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPeople())
    }, [])

    return (
        <div>
            <div className="section">People</div>
            <List />
            <Pager area="people" listAction={getPeople} />
            <div className="section">Details</div>
            <Details />
        </div>
    )
}