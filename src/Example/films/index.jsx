import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import List from './components/List'
import Details from './components/Details'
import { getFilms } from './actions'
import Pager from '../shared/components/Pager'

export default function Films() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFilms())
    }, [])

    return (
        <div>
            <div className="section">Films</div>
            <List />
            <Pager area="films" listAction={getFilms} />
            <div className="section">Details</div>
            <Details />
        </div>
    )
}